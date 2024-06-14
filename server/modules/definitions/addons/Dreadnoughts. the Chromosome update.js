const { base } = require('../constants.js');
const { combineStats, addAura, makeAuto, makeMulti } = require('../facilitators.js');
const { gunCalcNames, smshskl } = require('../constants.js');
const g = require('../gunvals.js');

/*
this command for aeipfpendfopweofnfnwnfopw
	for (let i = 0; i < 2; i++) {
		Class..GUNS.push(
	)
}
*/

// You can also disable addons by not making them end with '.js'
// If you want to enable, simply make the line below just not run.
//return console.log('the addon [Dreadnoughts. the Chromosome update.js] is disabled, no more chromosomes :(');

let MAX_CHILDREN = 0,
	GUNS = [],
	TURRETS = [],

alreadySeen = [],
next = ['basic'],

// We don't loop infinitely, because that's a bad idea if someone makes a circular upgrade path.
// Also, RECURSION BAD. RECURSION BAD. RECURSION BAD. RECURSION BAD. RECURSION BAD. RECURSION BAD.
limit = 1000;
while (next.length && limit--) {
	let current = next;
	next = [];
	for (let i = 0; i < current.length; i++) {

		// Handle string definition references
		let now = ensureIsClass(current[i]);

		// Handles tanks with multiple ways to upgrade to them, like Overgunner.
		if (alreadySeen.includes(now.LABEL)) continue;
		alreadySeen.push(now.LABEL);

		// Add guns, turrets and additional max child count to our current list of stuff for our chromosome to have.
		if (now.MAX_CHILDREN) MAX_CHILDREN += now.MAX_CHILDREN;
		if (now.GUNS) GUNS.push(...now.GUNS);
		if (now.TURRETS) TURRETS.push(...now.TURRETS);

		// Add upgrades of current tank to next iteration
		for (let key of Object.keys(now)) if (key.startsWith('UPGRADES_TIER_')) next.push(...now[key]);
	}
}

const ChromosomeBody = {
    SPEED: base.SPEED,
    HEALTH: base.HEALTH * 2,
	SHIELD: base.SHIELD * 2,
	REGEN: base.REGEN * 2,
    FOV: base.FOV * 1.4,
	RESIST: base.RESIST,
	DENSITY: base.DENSITY * 2,
};
Class.genericChromosomedread = {
	PARENT: ["genericTank"],
	SKILL_CAP: Array(10).fill(smshskl),
	REROOT_UPGRADE_TREE: ["Chromosomeprimary", "Chromosomesecondary", "Chromosomebody"],
}
Class.genericChromosome = {
	PARENT: ["genericChromosomedread"],
	BODY: ChromosomeBody,
	SHAPE: "M -0.5 0.5 Q -0.25 0.4 0 0.4 Q 0.25 0.4 0.5 0.5 Q 0.75 0.75 1.25 0.75 L 1.25 0.5 L 0.75 0 L 1.25 -0.5 L 1.25 -0.75 Q 0.75 -0.75 0.5 -0.5 Q 0.25 -0.4 0 -0.4 Q -0.25 -0.4 -0.5 -0.5 Q -0.75 -0.75 -1.25 -0.75 L -1.25 -0.5 L -0.75 0 L -1.25 0.5 L -1.25 0.75 Q -0.75 0.75 -0.5 0.5",
	COLOR: 14,
	LEVEL: 90,
	SIZE: 25,
	DANGER: 8,
	EXTRA_SKILL: 28,
}

// This adds the tank to the definitions and to the fun menu
Class.tissueshield = {
	PARENT: "genericChromosome",
	LABEL: "FR",
	SHAPE: "m -0.55 0.55 q 0.275 -0.11 0.55 -0.11 q 0.275 0 0.55 0.11 q 0.275 0.275 0.825 0.275 l 0 -0.275 l -0.55 -0.55 l 0.55 -0.55 l 0 -0.275 q -0.55 0 -0.825 0.275 q -0.275 0.11 -0.55 0.11 q -0.275 0 -0.55 -0.11 q -0.275 -0.275 -0.825 -0.275 l 0 0.275 l 0.55 0.55 l -0.55 0.55 l 0 0.275 q 0.55 0 0.825 -0.275"
}
Class.tissue = {
	PARENT: "genericChromosome",
	LABEL: "Tissue",
	BODY: {
		HEALTH: 1.6,
		SHIELD: 1.6,
		REGEN: 1.5,
		SPEED: 0.8,
	},
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 0],
			TYPE: ['tissueshield', {COLOR: 9}, {MIRROR_MASTER_ANGLE: true}],
		},
	],
}
Class.Chromosome = {
	PARENT: "genericChromosome",
	LABEL: "Chromosome",
};
Class.Chromosomebody = {
	PARENT: "genericChromosome",
	LABEL: "",
};
Class.Chromosomesecondary = {
	PARENT: "genericChromosome",
	LABEL: "",
};
Class.Centromere = {
	PARENT: "genericChromosome",
	LABEL: "Centromere",
	UPGRADE_TOOLTIP: "Bullets",
		GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.Centromere.GUNS.push(
		{
			POSITION: [14, 7, 1, 0, 0, 180*i, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85, damage: 2}]),
				TYPE: "bullet",
			},
		},
	)
}
Class.Building = {
	PARENT: "genericChromosome",
	LABEL: "Building",
	UPGRADE_TOOLTIP: "Bullets",
		GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.Building.GUNS.push(
		{
			POSITION: [5, 7, 1, 9, -3, 180*i, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85, damage: 2}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [5, 7, 1, 9, 3, 180*i, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85, damage: 2}]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [16, 7, 1, 0, 0, 180*i, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85, damage: 2}]),
				TYPE: "bullet",
			},
		},
	)
}
Class.Structure = {
	PARENT: "genericChromosome",
	LABEL: "Structure",
	UPGRADE_TOOLTIP: "Sniper Bullets",
		GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.Structure.GUNS.push(
		{
			POSITION: [17, 7, 1, 0, 0, 180*i, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.sniper, {reload: 0.85, damage: 2}]),
				TYPE: "bullet",
			},
		},
	)
}
Class.histones = {
	PARENT: "genericChromosome",
	LABEL: "Histones",
	UPGRADE_TOOLTIP: "Traps",
		GUNS: [],
	}
for (let i = 0; i < 2; i++) {
	Class.histones.GUNS.push(
		{
			POSITION: [12, 7, 1, 0, 0, 180*i, 0],
		},
		{
			POSITION: [3, 7, 1.5, 12, 0, 180*i, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85, damage: 2}]),
				TYPE: "trap",
			},
		},
	)
}
Class.Chromatide = {
	PARENT: "genericChromosome",
	LABEL: "Chromatide",
	UPGRADE_TOOLTIP: "Drones",
		GUNS: [],
	}
for (let i = 0; i < 2; i++) {
	Class.Chromatide.GUNS.push(
		{
			POSITION: [8, 7, 1.5, 6, 0, 180*i, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone]),
				TYPE: "drone",
				AUTOFIRE: true,
				SYNCS_SKILLS: true,
				STAT_CALCULATOR: gunCalcNames.drone,
				MAX_CHILDREN: 6
			}
		}
	)
}
Class.DNA = {
	PARENT: "genericChromosome",
	LABEL: "DNA",
	UPGRADE_TOOLTIP: "Heavy Bullets",
		GUNS: [],
	}
for (let i = 0; i < 2; i++) {
	Class.DNA.GUNS.push(
		{
			POSITION: [14, 9, 1, 0, 0, 180*i, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {reload: 0.85, damage: 2}]),
				TYPE: "bullet",
			},
		},
	)
}
Class.genes = {
	PARENT: "genericChromosome",
	LABEL: "Genes",
	UPGRADE_TOOLTIP: "Heavier Bullets",
		GUNS: [],
	}
for (let i = 0; i < 2; i++) {
	Class.genes.GUNS.push(
		{
			POSITION: [8, 11, 1, 6, 0, 180*i, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, {reload: 0.85, damage: 2}]),
				TYPE: "bullet",
			},
		},
	)
}
Class.nucleotides = {
	PARENT: "genericChromosome",
	LABEL: "Nucleotides",
	UPGRADE_TOOLTIP: "missiles",
		GUNS: [],
	}
for (let i = 0; i < 2; i++) {
	Class.nucleotides.GUNS.push(
		{
			POSITION: [15, 8, 1, 0, 0, 180*i, 0],
		},
		{
			POSITION: [14, 9, 1, 0, 0, 180*i, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {reload: 0.85, damage: 2}]),
				TYPE: "minimissile",
			},
		}
	)
}
Class.membrane = {
	PARENT: "genericChromosome",
	LABEL: "Membrane",
	UPGRADE_TOOLTIP: "Bullets on the side",
		GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.membrane.GUNS.push(
		{
			POSITION: [10, 7, 1, 0, 0, 180*i+90, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85, damage: 2}]),
				TYPE: "bullet",
			},
		},
	)
}
Class.nucleus = {
	PARENT: "genericChromosome",
	LABEL: "Nucleus",
	UPGRADE_TOOLTIP: "Traps on the side",
		GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.nucleus.GUNS.push(
		{
			POSITION: [7, 7, 1, 0, 0, 180*i+90, 0],
		},
		{
			POSITION: [3, 7, 1.5, 7, 0, 180*i+90, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85, damage: 2}]),
				TYPE: "trap",
			},
		},
	)
}
Class.organism = {
	PARENT: "genericChromosome",
	LABEL: "Organism",
	UPGRADE_TOOLTIP: "Drones on the side",
		GUNS: [],
}
for (let i = 0; i < 2; i++) {
	Class.organism.GUNS.push(
		{
			POSITION: [10, 7, 1.5, 0, 0, 180*i+90, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.drone]),
				TYPE: "drone",
				AUTOFIRE: true,
				SYNCS_SKILLS: true,
				STAT_CALCULATOR: gunCalcNames.drone,
				MAX_CHILDREN: 6
			}
		}
	)
}
Class.Centromere = {
	PARENT: "genericChromosome",
	LABEL: "Centromere",

		GUNS: [],
	}
	for (let i = 0; i < 2; i++) {
		Class.Centromere.GUNS.push(
			{
				POSITION: [14, 7, 1, 0, 0, 180*i, 0],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.85, damage: 2}]),
					TYPE: "bullet",
				},
			},
		)
}
Class.coilaura = addAura(1, 2, 0.15);
Class.telomereaura = addAura(1, 4, 0.15);
Class.springaura = addAura(2, 3, 0.15);
Class.coil = {
	PARENT: ["genericChromosome"],
	LABEL: "Coiler",
	UPGRADE_TOOLTIP: "Aura",
	TURRETS: [
		{
			POSITION: [5.5, 0, 0, 0, 360, 1],
			TYPE: 'coilaura',
		},
	],
}
Class.spring = {
	PARENT: ["genericChromosome"],
	LABEL: "Spring",
	UPGRADE_TOOLTIP: "Aura",
	TURRETS: [
		{
			POSITION: [6, 0, 0, 0, 360, 1],
			TYPE: 'springaura',
		},
	],
}
Class.protiensturret = {
PARENT: "genericTank",
LABEL: "Turret",
COLOR: "grey",
INDEPENDENT: true,
CONTROLLERS: ['nearestDifferentMaster'],
BODY: {
	FOV: 0.8,
	},
	GUNS: [
		{
			POSITION: [14, 5, 1, 0, 5.5, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, -5.5, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, 5.5, 180, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, -5.5, 180, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
	],
};
Class.telomereturret = {
	PARENT: "genericTank",
	LABEL: "Turret",
	COLOR: "grey",
	INDEPENDENT: true,
	CONTROLLERS: ['nearestDifferentMaster'],
	BODY: {
		FOV: 0.8,
	},
	GUNS: Class.protiensturret.GUNS,
	TURRETS: [
		{
			POSITION: [7.5, 0, 0, 0, 360, 2],
			TYPE: 'telomereaura',
		},
	]
}
Class.chromonema = {
	PARENT: "genericChromosome",
	LABEL: "Chromonema",
	BODY: {
		HEALTH: 1.6,
		SHIELD: 1.6,
		REGEN: 1.5,
		SPEED: 0.8,
	},
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 0],
			TYPE: ['tissueshield', {COLOR: 9}, {MIRROR_MASTER_ANGLE: true}],
		},
		{
			POSITION: [5, 0, 0, 0, 360, 1],
			TYPE: ['protiensturret'],
		},
	],
}
Class.cytosine = {
	PARENT: "genericChromosome",
	LABEL: "Cytosine",
	BODY: {
		HEALTH: 1.6,
		SHIELD: 1.6,
		REGEN: 1.5,
		SPEED: 0.8,
	},
	TURRETS: [
		{
			POSITION: [20, 0, 0, 0, 0, 0],
			TYPE: ['tissueshield', {COLOR: 9}, {MIRROR_MASTER_ANGLE: true}],
		},
		{
			POSITION: [5.5, 0, 0, 0, 360, 1],
			TYPE: ['coilaura'],
		},
	],
}
Class.adenine = {
	PARENT: "genericChromosome",
	LABEL: "Adenine",
	BODY: {
		HEALTH: 2,
		SHIELD: 2.2,
		REGEN: 2,
		SPEED: 0.6,
	},
	TURRETS: [
		{
			POSITION: [21, 0, 0, 0, 0, 0],
			TYPE: ['tissueshield', {COLOR: 9}, {MIRROR_MASTER_ANGLE: true}],
		},
	],
}
Class.vitaminsturret = {
	PARENT: "genericTank",
	LABEL: "Turret",
	COLOR: "grey",
	INDEPENDENT: true,
	CONTROLLERS: ['nearestDifferentMaster'],
	BODY: {
		FOV: 0.8,
	},
	GUNS: [
		{
			POSITION: [14, 5, 1, 0, 5.5, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, -5.5, 0, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, 5.5, 90, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, -5.5, 90, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, 5.5, 180, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, -5.5, 180, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, 5.5, 270, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		},
		{
			POSITION: [14, 5, 1, 0, -5.5, 270, 0.5],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
				TYPE: "bullet",
			},
		}
	]
};
Class.protiens = makeAuto(Class.Chromosomebody, "Protiens", {type: "protiensturret", size: 5})
Class.vitamins = makeAuto(Class.Chromosomebody, "Vitamins", {type: "vitaminsturret", size: 5})
Class.telomere = makeAuto(Class.Chromosomebody, "Telomere", {type: "telomereturret", size: 5})
Class.addons.UPGRADES_TIER_0.push("Chromosome");
Class.Chromosome.UPGRADES_TIER_1 = [
	["Centromere",  "Chromosomesecondary", "Chromosomebody"],
	["Chromatide",  "Chromosomesecondary", "Chromosomebody"],
	["DNA",         "Chromosomesecondary", "Chromosomebody"],
	["histones",    "Chromosomesecondary", "Chromosomebody"]
];
	Class.Centromere.UPGRADES_TIER_0 = ["Structure", "Building"]
	Class.DNA.UPGRADES_TIER_0 = ["genes", "nucleotides"]
Class.Chromosomebody.UPGRADES_TIER_0 = ["coil", "protiens", "tissue"]
	Class.protiens.UPGRADES_TIER_0 = ["vitamins", "chromonema", "telomere"]
	Class.coil.UPGRADES_TIER_0 = ["telomere", "spring", "cytosine"]
	Class.tissue.UPGRADES_TIER_0 = ["chromonema", "cytosine", "adenine"]
Class.Chromosomesecondary.UPGRADES_TIER_0 = ["membrane", "nucleus", "organism"]

console.log('Here comes the chromosomes!');