'use strict';

exports.BattleMovedex = {
	"impalingfeather": {
		num: 10001,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1.",
		id: "impalingfeather",
		isViable: true,
		name: "impalingfeather",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 160,
		contestType: "Cool",
	},
	"quickspark": {
		num: 10002,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "quickspark",
		name: "Quick Spark",
		pp: 25,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		secondary: false,
		target: "normal",
		type: "Electric",
		zMovePower: 140,
		contestType: "Cool",
	},
};
