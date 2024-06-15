package database

import (
	"github.com/wowsims/sod/sim/core/proto"
)

// Overrides for runes as needed
// Regen db with "go run ./tools/database/gen_db -outDir=assets -gen=db"
// And ensure db files are copied from assets/db into dist/sod/database
var RuneOverrides = []*proto.UIRune{
	// Ring rune tooltips lack the relevant class restrictions so manually override the class allowlists
	// Ring - Arcane Specialization
	{Id: 442893, ClassAllowlist: []proto.Class{proto.Class_ClassDruid, proto.Class_ClassMage}},
	// Ring - Axe Specialization
	{Id: 442876, ClassAllowlist: []proto.Class{proto.Class_ClassWarrior, proto.Class_ClassPaladin, proto.Class_ClassHunter, proto.Class_ClassShaman}},
	// Ring - Dagger Specialization
	{Id: 442887, ClassAllowlist: []proto.Class{proto.Class_ClassWarrior, proto.Class_ClassHunter, proto.Class_ClassRogue, proto.Class_ClassPriest, proto.Class_ClassShaman, proto.Class_ClassMage, proto.Class_ClassWarlock, proto.Class_ClassDruid}},
	// Ring - Defense Specialization
	{Id: 459312, ClassAllowlist: []proto.Class{proto.Class_ClassWarrior, proto.Class_ClassPaladin, proto.Class_ClassRogue, proto.Class_ClassShaman, proto.Class_ClassWarlock, proto.Class_ClassDruid}},
	// Ring - Feral Combat Specialization
	{Id: 453622, ClassAllowlist: []proto.Class{proto.Class_ClassDruid}},
	// Ring - Fire Specialization
	{Id: 442894, ClassAllowlist: []proto.Class{proto.Class_ClassShaman, proto.Class_ClassMage, proto.Class_ClassWarlock}},
	// Ring - Fist Weapon Specialization
	{Id: 442890, ClassAllowlist: []proto.Class{proto.Class_ClassWarrior, proto.Class_ClassHunter, proto.Class_ClassRogue, proto.Class_ClassShaman, proto.Class_ClassDruid}},
	// Ring - Frost Specialization
	{Id: 442895, ClassAllowlist: []proto.Class{proto.Class_ClassShaman, proto.Class_ClassMage}},
	// Ring - Holy Specialization
	{Id: 442898, ClassAllowlist: []proto.Class{proto.Class_ClassPaladin, proto.Class_ClassPriest}},
	// Ring - Mace Specialization
	{Id: 442881, ClassAllowlist: []proto.Class{proto.Class_ClassWarrior, proto.Class_ClassPaladin, proto.Class_ClassRogue, proto.Class_ClassPriest, proto.Class_ClassShaman, proto.Class_ClassDruid}},
	// Ring - Nature Specialization
	{Id: 442896, ClassAllowlist: []proto.Class{proto.Class_ClassRogue, proto.Class_ClassShaman, proto.Class_ClassDruid}},
	// Ring - Pole Weapon Specialization
	{Id: 442892, ClassAllowlist: []proto.Class{proto.Class_ClassWarrior, proto.Class_ClassPaladin, proto.Class_ClassHunter, proto.Class_ClassPriest, proto.Class_ClassShaman, proto.Class_ClassMage, proto.Class_ClassWarlock, proto.Class_ClassDruid}},
	// Ring - Ranged Weapon Specialization
	{Id: 442891, ClassAllowlist: []proto.Class{proto.Class_ClassWarrior, proto.Class_ClassHunter, proto.Class_ClassRogue}},
	// Ring - Shadow Specialization
	{Id: 442897, ClassAllowlist: []proto.Class{proto.Class_ClassPriest, proto.Class_ClassWarlock}},
	// Ring - Sword Specialization
	{Id: 442813, ClassAllowlist: []proto.Class{proto.Class_ClassWarrior, proto.Class_ClassPaladin, proto.Class_ClassHunter, proto.Class_ClassRogue, proto.Class_ClassMage, proto.Class_ClassWarlock}},

	// Hunter
	// As of 2024-06-13 Cobra Slayer is being missed by the scraper because the rune engraving ability is missing "Engrave Rune" in the name
	{Id: 458393, Name: "Engrave Chest - Cobra Slayer", Icon: "spell_nature_guardianward", Type: proto.ItemType_ItemTypeChest, ClassAllowlist: []proto.Class{proto.Class_ClassHunter}},
}

// Remove runes as you implement them.
var UnimplementedRuneOverrides = []int32{
	// Druid
	453622, // Ring - Feral Combat
	439510, // Cloak - Improved Swipe
	439733, // Cloak - Tree of Life
	439748, // Cloak - Starfall

	// Hunter
	440520, // Cloak - Improved Volley
	440529, // Cloak - Resourcefulness
	440533, // Cloak - Hit and Run

	// Mage
	400610, // Cloak - Arcane Barrage
	400615, // Cloak - Overheat
	440802, // Cloak - Frozen Orb

	// Paladin
	440658, // Cloak - Shield of Righteousness
	440666, // Cloak - Vindicator
	440672, // Cloak - Righteous Vengeance

	// Priest
	401937, // Cloak - Binding Heal
	402000, // Cloak - Soul Warding
	402668, // Cloak - Vampiric Touch

	// Rogue
	409240, // Cloak - Fan of Knives
	412096, // Cloak - Crimson Tempest
	436564, // Cloak - Blunderbuss

	// Shaman

	// Warlock
	440870, // Cloak - Decimation
	440882, // Cloak - Infernal Armor
	440892, // Cloak - Mark of Chaos

	// Warrior
	440113, // Cloak - Sudden Death
	440484, // Cloak - Fresh Meat
	440488, // Cloak - Shockwave
}
