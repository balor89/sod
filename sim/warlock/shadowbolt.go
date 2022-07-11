package warlock

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (warlock *Warlock) registerShadowboltSpell() {
	has4pMal := ItemSetMaleficRaiment.CharacterHasSetBonus(&warlock.Character, 4)

	effect := core.SpellEffect{
		ProcMask:             core.ProcMaskSpellDamage,
		BonusSpellCritRating: core.TernaryFloat64(warlock.Talents.Devastation, 0, 1) * 5 * core.CritRatingPerCritChance,
		DamageMultiplier:     1 * core.TernaryFloat64(has4pMal, 1.06, 1.0) * (1 + 0.02*float64(warlock.Talents.ImprovedShadowBolt)),
		ThreatMultiplier:     1 - 0.1*float64(warlock.Talents.DestructiveReach),
		BaseDamage:           core.BaseDamageConfigMagic(694.0, 775.0, 0.857*(1+0.04*float64(warlock.Talents.ShadowAndFlame))),
		OutcomeApplier:       warlock.OutcomeFuncMagicHitAndCrit(warlock.SpellCritMultiplier(1, float64(warlock.Talents.Ruin) / 5)),
		OnSpellHitDealt:  	  func(sim *core.Simulation, spell *core.Spell, spellEffect *core.SpellEffect) {
			// ISB debuff
			if warlock.Talents.ImprovedShadowBolt > 0 {
				if sim.RandomFloat("ISB") < 0.2 * float64(warlock.Talents.ImprovedShadowBolt) {
					if !core.ImprovedShadowBoltAura(warlock.CurrentTarget).IsActive() {
						core.ImprovedShadowBoltAura(warlock.CurrentTarget).Activate(sim)
					} else {
						core.ImprovedShadowBoltAura(warlock.CurrentTarget).Refresh(sim)
					}
				}
			}
			// Everlasting Affliction Refresh
			if warlock.CorruptionDot.IsActive() {
				if sim.RandomFloat("EverlastingAffliction") < 0.2 * float64(warlock.Talents.EverlastingAffliction) {
					 warlock.CorruptionDot.Refresh(sim)
				}
			}
		},
	}

	var modCast func(*core.Simulation, *core.Spell, *core.Cast)

	if warlock.Talents.Nightfall > 0 {
		modCast = func(_ *core.Simulation, _ *core.Spell, cast *core.Cast) {
			warlock.applyNightfall(cast)
		}
	}

	baseCost := 0.17 * warlock.BaseMana
	warlock.Shadowbolt = warlock.RegisterSpell(core.SpellConfig{
		ActionID:    core.ActionID{SpellID: 47809},
		SpellSchool: core.SpellSchoolShadow,

		ResourceType: stats.Mana,
		BaseCost:     baseCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost:     baseCost * (1 - 0.01*float64(warlock.Talents.Cataclysm)),
				GCD:      core.GCDDefault,
				CastTime: time.Millisecond*3000 - (time.Millisecond * 100 * time.Duration(warlock.Talents.Bane)),
			},
			ModifyCast: modCast,
		},

		ApplyEffects: core.ApplyEffectFuncDirectDamage(effect),
	})

}
