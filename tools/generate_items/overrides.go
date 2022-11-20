package main

import (
	"regexp"

	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/core/stats"
)

// Allows manual overriding for Item fields in case WowHead is wrong.
var ItemOverrideOverrides = []ItemOverride{
	{ /** Destruction Holo-gogs */ ID: 32494, ClassAllowlist: []proto.Class{proto.Class_ClassMage, proto.Class_ClassPriest, proto.Class_ClassWarlock}},
	{ /** Gadgetstorm Goggles */ ID: 32476, ClassAllowlist: []proto.Class{proto.Class_ClassShaman}},
	{ /** Magnified Moon Specs */ ID: 32480, ClassAllowlist: []proto.Class{proto.Class_ClassDruid}},
	{ /** Quad Deathblow X44 Goggles */ ID: 34353, ClassAllowlist: []proto.Class{proto.Class_ClassDruid, proto.Class_ClassRogue}},
	{ /** Hyper-Magnified Moon Specs */ ID: 35182, ClassAllowlist: []proto.Class{proto.Class_ClassDruid}},
	{ /** Lightning Etched Specs */ ID: 34355, ClassAllowlist: []proto.Class{proto.Class_ClassShaman}},
	{ /** Annihilator Holo-Gogs */ ID: 34847, ClassAllowlist: []proto.Class{proto.Class_ClassMage, proto.Class_ClassPriest, proto.Class_ClassWarlock}},

	// Valorous T8 Sets
	{ID: 45375, Phase: 2},
	{ID: 45381, Phase: 2},
	{ID: 45382, Phase: 2},
	{ID: 45376, Phase: 2},
	{ID: 45370, Phase: 2},
	{ID: 45371, Phase: 2},
	{ID: 45383, Phase: 2},
	{ID: 45372, Phase: 2},
	{ID: 45377, Phase: 2},
	{ID: 45384, Phase: 2},
	{ID: 45379, Phase: 2},
	{ID: 45385, Phase: 2},
	{ID: 45380, Phase: 2},
	{ID: 45373, Phase: 2},
	{ID: 45374, Phase: 2},
	{ID: 45391, Phase: 2},
	{ID: 45386, Phase: 2},
	{ID: 45340, Phase: 2},
	{ID: 45335, Phase: 2},
	{ID: 45336, Phase: 2},
	{ID: 45341, Phase: 2},
	{ID: 45337, Phase: 2},
	{ID: 45342, Phase: 2},
	{ID: 45338, Phase: 2},
	{ID: 45343, Phase: 2},
	{ID: 45339, Phase: 2},
	{ID: 45344, Phase: 2},
	{ID: 45419, Phase: 2},
	{ID: 45417, Phase: 2},
	{ID: 45420, Phase: 2},
	{ID: 45421, Phase: 2},
	{ID: 45422, Phase: 2},
	{ID: 45387, Phase: 2},
	{ID: 45392, Phase: 2},
	{ID: 46131, Phase: 2},
	{ID: 45365, Phase: 2},
	{ID: 45367, Phase: 2},
	{ID: 45369, Phase: 2},
	{ID: 45368, Phase: 2},
	{ID: 45388, Phase: 2},
	{ID: 45393, Phase: 2},
	{ID: 46313, Phase: 2},
	{ID: 45351, Phase: 2},
	{ID: 45355, Phase: 2},
	{ID: 45345, Phase: 2},
	{ID: 45356, Phase: 2},
	{ID: 45346, Phase: 2},
	{ID: 45347, Phase: 2},
	{ID: 45357, Phase: 2},
	{ID: 45352, Phase: 2},
	{ID: 45358, Phase: 2},
	{ID: 45348, Phase: 2},
	{ID: 45359, Phase: 2},
	{ID: 45349, Phase: 2},
	{ID: 45353, Phase: 2},
	{ID: 45354, Phase: 2},
	{ID: 45394, Phase: 2},
	{ID: 45395, Phase: 2},
	{ID: 45389, Phase: 2},
	{ID: 45360, Phase: 2},
	{ID: 45361, Phase: 2},
	{ID: 45362, Phase: 2},
	{ID: 45363, Phase: 2},
	{ID: 45364, Phase: 2},
	{ID: 45390, Phase: 2},
	{ID: 45429, Phase: 2},
	{ID: 45424, Phase: 2},
	{ID: 45430, Phase: 2},
	{ID: 45425, Phase: 2},
	{ID: 45426, Phase: 2},
	{ID: 45431, Phase: 2},
	{ID: 45427, Phase: 2},
	{ID: 45432, Phase: 2},
	{ID: 45428, Phase: 2},
	{ID: 45433, Phase: 2},
	{ID: 45396, Phase: 2},
	{ID: 45397, Phase: 2},
	{ID: 45398, Phase: 2},
	{ID: 45399, Phase: 2},
	{ID: 45400, Phase: 2},
	{ID: 45413, Phase: 2},
	{ID: 45412, Phase: 2},
	{ID: 45406, Phase: 2},
	{ID: 45414, Phase: 2},
	{ID: 45401, Phase: 2},
	{ID: 45411, Phase: 2},
	{ID: 45402, Phase: 2},
	{ID: 45408, Phase: 2},
	{ID: 45409, Phase: 2},
	{ID: 45403, Phase: 2},
	{ID: 45415, Phase: 2},
	{ID: 45410, Phase: 2},
	{ID: 45404, Phase: 2},
	{ID: 45405, Phase: 2},
	{ID: 45416, Phase: 2},

	// Other items Wowhead has the wrong phase listed for
	// Ick's loot table from Pit of Saron
	{ID: 49812, Phase: 4},
	{ID: 49808, Phase: 4},
	{ID: 49811, Phase: 4},
	{ID: 49807, Phase: 4},
	{ID: 49810, Phase: 4},
	{ID: 49809, Phase: 4},
}

// Keep these sorted by item ID.
var itemAllowList = map[int]struct{}{
	11815: struct{}{}, // Hand of Justice
	12590: struct{}{}, // Felstriker
	15808: struct{}{}, // Fine Light Crossbow (for hunter testing).
	18843: struct{}{},
	18844: struct{}{},
	18847: struct{}{},
	18848: struct{}{},
	19019: struct{}{}, // Thunderfury
	19808: struct{}{}, // Rockhide Strongfish
	20837: struct{}{}, // Sunstrider Axe
	20966: struct{}{}, // Jade Pendant of Blasting
	24114: struct{}{}, // Braided Eternium Chain
	28830: struct{}{}, // Dragonspine Trophy
	29383: struct{}{}, // Bloodlust Brooch
	29387: struct{}{}, // Gnomeregan Auto-Blocker 600
	29994: struct{}{}, // Thalassian Wildercloak
	29996: struct{}{}, // Rod of the Sun King
	30032: struct{}{}, // Red Belt of Battle
	30627: struct{}{}, // Tsunami Talisman
	30720: struct{}{}, // Serpent-Coil Braid
	32387: struct{}{}, // Idol of the Raven Goddess
	32658: struct{}{}, // Badge of Tenacity
	33135: struct{}{}, // Falling Star
	33140: struct{}{}, // Blood of Amber
	33143: struct{}{}, // Stone of Blades
	33144: struct{}{}, // Facet of Eternity
	33504: struct{}{}, // Libram of Divine Purpose
	33506: struct{}{}, // Skycall Totem
	33507: struct{}{}, // Stonebreaker's Totem
	33510: struct{}{}, // Unseen moon idol
	33829: struct{}{}, // Hex Shrunken Head
	33831: struct{}{}, // Berserkers Call
	34472: struct{}{}, // Shard of Contempt
	34473: struct{}{}, // Commendation of Kael'thas
	37032: struct{}{}, // Edge of the Tuskarr
	37574: struct{}{}, // Libram of Furious Blows
	38072: struct{}{}, // Thunder Capacitor
	38212: struct{}{}, // Death Knight's Anguish
	38287: struct{}{}, // Empty Mug of Direbrew
	38289: struct{}{}, // Coren's Lucky Coin
	39208: struct{}{}, // Sigil of the Dark Rider
	41752: struct{}{}, // Brunnhildar Axe
	6360:  struct{}{}, // Steelscale Crushfish
	8345:  struct{}{}, // Wolfshead Helm
	9449:  struct{}{}, // Manual Crowd Pummeler

	// Sets
	27510: struct{}{}, // Tidefury Gauntlets
	27802: struct{}{}, // Tidefury Shoulderguards
	27909: struct{}{}, // Tidefury Kilt
	28231: struct{}{}, // Tidefury Chestpiece
	28349: struct{}{}, // Tidefury Helm

	15056: struct{}{}, // Stormshroud Armor
	15057: struct{}{}, // Stormshroud Pants
	15058: struct{}{}, // Stormshroud Shoulders
	21278: struct{}{}, // Stormshroud Gloves

	// Undead Slaying Sets
	// Plate
	43068: struct{}{},
	43069: struct{}{},
	43070: struct{}{},
	43071: struct{}{},
	// Cloth
	43072: struct{}{},
	43073: struct{}{},
	43074: struct{}{},
	43075: struct{}{},
	// Mail
	43076: struct{}{},
	43077: struct{}{},
	43078: struct{}{},
	43079: struct{}{},
	//Leather
	43080: struct{}{},
	43081: struct{}{},
	43082: struct{}{},
	43083: struct{}{},
}

// Keep these sorted by item ID.
var itemDenyList = map[int]struct{}{
	17782: struct{}{}, // talisman of the binding shard
	17783: struct{}{}, // talisman of the binding fragment
	17802: struct{}{}, // Deprecated version of Thunderfury
	18582: struct{}{},
	18583: struct{}{},
	18584: struct{}{},
	24265: struct{}{},
	32384: struct{}{},
	32421: struct{}{},
	32422: struct{}{},
	33482: struct{}{},
	34576: struct{}{}, // Battlemaster's Cruelty
	34577: struct{}{}, // Battlemaster's Depreavity
	34578: struct{}{}, // Battlemaster's Determination
	34579: struct{}{}, // Battlemaster's Audacity
	34580: struct{}{}, // Battlemaster's Perseverence
	43727: struct{}{}, // Bonescythe Breastplate
}

// Item icons to include in the DB, so they don't need to be separately loaded in the UI.
var extraItemIcons = []int{
	// Pet foods
	33874,
	43005,

	// Spellstones
	41174,
	41196,

	// Demonic Rune
	12662,

	// Food IDs
	27655,
	27657,
	27658,
	27664,
	33052,
	33825,
	33872,
	34753,
	34754,
	34756,
	34758,
	34767,
	34769,
	42994,
	42995,
	42996,
	42998,
	42999,
	43000,
	43015,

	// Flask IDs
	13512,
	22851,
	22853,
	22854,
	22861,
	22866,
	33208,
	40079,
	44939,
	46376,
	46377,
	46378,
	46379,

	// Elixer IDs
	40072,
	40078,
	40097,
	40109,
	44328,
	44332,

	// Elixer IDs
	13452,
	13454,
	22824,
	22827,
	22831,
	22833,
	22834,
	22835,
	22840,
	28103,
	28104,
	31679,
	32062,
	32067,
	32068,
	39666,
	40068,
	40070,
	40073,
	40076,
	44325,
	44327,
	44329,
	44330,
	44331,
	9088,
	9224,

	// Potions / In Battle Consumes
	13442,
	20520,
	22105,
	22788,
	22828,
	22832,
	22837,
	22838,
	22839,
	22849,
	31677,
	33447,
	33448,
	40093,
	40211,
	40212,
	40536,
	40771,
	41119,
	42641,

	// Poisons
	43231,
	43233,
	43235,

	// Thistle Tea
	7676,
}

// If any of these match the item name, don't include it.
var denyListNameRegexes = []*regexp.Regexp{
	regexp.MustCompile(`DB\d`),
	regexp.MustCompile(`DEPRECATED`),
	regexp.MustCompile(`PH`),
	regexp.MustCompile(`TEST`),
	regexp.MustCompile(`Test`),
	regexp.MustCompile(`Bracer 3`),
	regexp.MustCompile(`Bracer 2`),
	regexp.MustCompile(`Bracer 1`),
	regexp.MustCompile(`Boots 3`),
	regexp.MustCompile(`Boots 2`),
	regexp.MustCompile(`Boots 1`),
	regexp.MustCompile(`zOLD`),
	regexp.MustCompile(`30 Epic`),
	regexp.MustCompile(`Indalamar`),
	regexp.MustCompile(`QR XXXX`),
	regexp.MustCompile(`Deprecated: Keanna`),
	regexp.MustCompile(`90 Epic`),
	regexp.MustCompile(`66 Epic`),
	regexp.MustCompile(`63 Blue`),
	regexp.MustCompile(`90 Green`),
	regexp.MustCompile(`63 Green`),
}

// Allows manual overriding for Gem fields in case WowHead is wrong.
var GemOverrides = []*proto.UIGem{
	{Id: 33131, Stats: stats.Stats{stats.AttackPower: 32, stats.RangedAttackPower: 32}.ToFloatArray()},
}
var gemDenyList = map[int]struct{}{
	// pvp non-unique gems not in game currently.
	32735: struct{}{},
	35489: struct{}{},
	38545: struct{}{},
	38546: struct{}{},
	38547: struct{}{},
	38548: struct{}{},
	38549: struct{}{},
	38550: struct{}{},
}
