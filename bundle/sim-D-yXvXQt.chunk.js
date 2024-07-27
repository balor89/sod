import{N as e,m as a,l as s,n as t,o as l,q as n,Y as r,ab as o,ac as p,ad as i,t as c,ae as d,T as u,Z as I,_ as v,$ as m,a0 as h,a2 as g,a1 as C,y as S}from"./preset_utils-ByMR9qO-.chunk.js";import{a6 as O,a7 as P,b1 as A,a9 as T,aw as y,at as E,ae as b,ai as L,a5 as k,aj as q,am as f,P as G,an as U,ax as R,al as w,S as H,ap as M,C as D,F as B,R as x}from"./detailed_results-B-MfQter.chunk.js";const V=e({fieldName:"honorAmongThievesCritRate",label:"Honor Among Thieves Crit Rate",labelTooltip:"Number of crits other group members generate within 100 seconds"}),F={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}},{spellCanCast:{spellId:{spellId:1856}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:14177}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:5171}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"25s"}}}}]}},castSpell:{spellId:{spellId:5171}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{castSpell:{spellId:{spellId:399956}}}}]},K={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}},{action:{castSpell:{spellId:{spellId:20572}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432276}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}}}]}},castSpell:{spellId:{spellId:11289}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},castSpell:{spellId:{itemId:10646}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:215168}}},{castSpell:{spellId:{itemId:18641}}}]}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432276}}},{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}}},{and:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11289}}},rhs:{const:{val:"1.5s"}}}}]}}]}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}}]}},castSpell:{spellId:{spellId:11273}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:6774,rank:2}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:6774,rank:2}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:425096}}},{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:425096}}},{not:{val:{runeIsEquipped:{runeId:{spellId:425096}}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}}]}}]}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}}]}},castSpell:{spellId:{spellId:399956}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:399956}}}}]},N={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}}],priorityList:[{action:{condition:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}}}},{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"15"}}}}]}},castSpell:{spellId:{itemId:7676}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLt",lhs:{math:{op:"OpAdd",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{math:{op:"OpDiv",lhs:{currentEnergy:{}},rhs:{const:{val:"10"}}}}}},rhs:{const:{val:"16"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{remainingTime:{}}}},{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"80"}}}}]}}]}},castSpell:{spellId:{spellId:8650}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:14177}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}}}},{cmp:{op:"OpLt",lhs:{math:{op:"OpAdd",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{math:{op:"OpDiv",lhs:{currentEnergy:{}},rhs:{const:{val:"10"}}}}}},rhs:{const:{val:"16"}}}}]}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{remainingTime:{}}}}]}},castSpell:{spellId:{spellId:399956}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"80"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8650}}},rhs:{remainingTime:{}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"8"}}}}]}}]}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:2824}}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:399956}}}}]},j={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}},{action:{castSpell:{spellId:{spellId:20572}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432276}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}}}]}},castSpell:{spellId:{spellId:11289}}}},{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:11197,rank:4}}}},{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}},{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:399956}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"6s"}}}},waitUntil:{condition:{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{itemId:10646}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:215168}}},{castSpell:{spellId:{itemId:18641}}}]}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432276}}},{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}}},{and:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11273}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11289}}},rhs:{const:{val:"1.5s"}}}}]}}]}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:11273}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:6774,rank:2}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:6774,rank:2}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:425096}}},{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:425096}}},{not:{val:{runeIsEquipped:{runeId:{spellId:425096}}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}}]}}]}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}}]}},castSpell:{spellId:{spellId:399956}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:399956}}}}]},W={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}},{action:{castSpell:{spellId:{spellId:20572}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},castSpell:{spellId:{itemId:10646}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:215168}}},{castSpell:{spellId:{itemId:18641}}}]}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:6774,rank:2}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:6774,rank:2}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:425096}}},{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:425096}}},{not:{val:{runeIsEquipped:{runeId:{spellId:425096}}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}}]}}]}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}}]}},castSpell:{spellId:{spellId:424785}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:424785}}}}]},_={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1787}}},doAtValue:{const:{val:"0s"}}},{action:{castSpell:{spellId:{spellId:20572}}},doAtValue:{const:{val:"-1.5s"}}}],priorityList:[{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:11197,rank:4}}}},{action:{condition:{and:{vals:[{or:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}},{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:424785}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"6s"}}}},waitUntil:{condition:{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}},rhs:{const:{val:"2s"}}}}]}}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{itemId:10646}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:1787,rank:4}}}}},{auraIsActive:{auraId:{spellId:6774,rank:2}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:432276}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},strictSequence:{actions:[{castSpell:{spellId:{itemId:215168}}},{castSpell:{spellId:{itemId:18641}}}]}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432271}}},{not:{val:{auraIsActive:{auraId:{spellId:6774,rank:2}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10s"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432271}}}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:6774,rank:2}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"20"}}}},{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:11197,rank:4}}}]}},castSpell:{spellId:{spellId:6774,rank:2}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:425096}}},{not:{val:{auraIsActive:{auraId:{spellId:425096}}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{or:{vals:[{auraIsActive:{auraId:{spellId:425096}}},{not:{val:{runeIsEquipped:{runeId:{spellId:425096}}}}}]}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:399963}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:14177}}},{castSpell:{spellId:{spellId:399963}}}]}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}}]}}]}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3s"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:399963}}}},{action:{condition:{and:{vals:[{runeIsEquipped:{runeId:{spellId:432264}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"1"}}}},{and:{vals:[{or:{vals:[{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"70"}}}},{and:{vals:[{auraIsKnown:{auraId:{spellId:13750}}},{auraIsActive:{auraId:{spellId:13750}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}}]}}]}},{cmp:{op:"OpLt",lhs:{timeToEnergyTick:{}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsKnown:{auraId:{spellId:425096}}},{auraIsActive:{auraId:{spellId:425096}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}}]}},castSpell:{spellId:{spellId:424785}}}},{action:{condition:{and:{vals:[{not:{val:{runeIsEquipped:{runeId:{spellId:432264}}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:424785}}}}]},z={items:[{id:211510},{id:209422},{id:209692},{id:209680},{id:211512,rune:399965},{id:3202},{id:7359,rune:424785},{id:209421},{id:10410,rune:399963},{id:211511},{id:20439},{id:2933},{id:211449},{},{id:209525},{id:209691},{id:209688}]},Y={items:[{id:211510},{id:209422},{id:209692},{id:209680},{id:211512,rune:399965},{id:3202},{id:7359,rune:399956},{id:209421},{id:10410,rune:399963},{id:211511},{id:20439},{id:2933},{id:211449},{},{id:209436},{id:209436},{id:209688}]},Z={items:[{id:215166},{id:213344},{id:9647},{id:5257,enchant:849},{id:213313,enchant:866,rune:399965},{id:19590,enchant:856},{id:213319,enchant:904,rune:399956},{id:215115,rune:400029},{id:213332,rune:399963},{id:213341,enchant:247,rune:425096},{id:19512},{id:213284},{id:211449},{id:213348},{id:213291,enchant:7210},{id:3187,randomSuffix:1554,enchant:7210},{id:213355}]},$={items:[{id:223963,rune:432259},{id:213344},{id:221411},{id:11626,enchant:849},{id:213313,enchant:866,rune:400014},{id:19590,enchant:856,rune:432271},{id:15708,enchant:904,rune:399956},{id:11686,rune:400029},{id:213332,rune:400012},{id:213341,enchant:247,rune:400016},{id:19511},{id:220626},{id:211449},{id:223195},{id:221460,enchant:2564},{id:220585,enchant:2564},{id:220572}]},J={items:[{id:223963,rune:432259},{id:213344},{id:221411},{id:11626,enchant:849},{id:213313,enchant:866,rune:400014},{id:19590,enchant:856,rune:432271},{id:15708,enchant:904,rune:424785},{id:11686,rune:400029},{id:213332,rune:400012},{id:213341,enchant:247,rune:400016},{id:19511},{id:220626},{id:211449},{id:223195},{id:220588,enchant:2564},{id:220589,enchant:2564},{id:220572}]};a("Blank",{items:[]});const Q=a("P1 Daggers",Y,{customCondition:e=>25==e.getLevel()}),X=a("P2 Daggers",Z,{customCondition:e=>40==e.getLevel()}),ee=a("P1 Combat",z,{customCondition:e=>25==e.getLevel()}),ae=a("P3 Daggers",$,{customCondition:e=>e.getLevel()>=50}),se=a("P3 Saber",J,{customCondition:e=>e.getLevel()>=50}),te={[O.Phase1]:[Q,ee],[O.Phase2]:[X],[O.Phase3]:[ae,se],[O.Phase4]:[],[O.Phase5]:[]},le=te[O.Phase3][0],ne=s("Mutilate",F,{customCondition:e=>e.getLevel()<=40}),re=s("Mutilate IEA",N,{customCondition:e=>e.getLevel()<=40}),oe=s("P3 Mutilate",K,{customCondition:e=>e.getLevel()>=50}),pe=s("P3 Expose Mutilate",j,{customCondition:e=>e.getLevel()>=50}),ie=s("P3 Saber",W,{customCondition:e=>e.getLevel()>=50}),ce=s("P3 Expose Saber",_,{customCondition:e=>e.getLevel()>=50}),de={[O.Phase1]:[ne],[O.Phase2]:[ne,re],[O.Phase3]:[oe,pe,ie,ce],[O.Phase4]:[],[O.Phase5]:[]},ue={25:{0:de[O.Phase1][0],1:de[O.Phase1][0],2:de[O.Phase1][0]},40:{0:de[O.Phase2][0],1:de[O.Phase2][0],2:de[O.Phase2][0]},50:{0:de[O.Phase3][0],1:de[O.Phase3][0],2:de[O.Phase3][0]}},Ie=t("P1 Combat Dagger",P.create({talentsString:"-023305002001"}),{customCondition:e=>25==e.getLevel()}),ve=t("P2 CB Mutilate",P.create({talentsString:"005303103551--05"}),{customCondition:e=>40==e.getLevel()}),me=t("P2 CB/IEA Mutilate",P.create({talentsString:"005303121551--05"}),{customCondition:e=>40==e.getLevel()}),he=t("P2 AR/BF Mutilate",P.create({talentsString:"-0053052020550100201"}),{customCondition:e=>40==e.getLevel()}),ge=t("P3 HAT/CttC Mutilate",P.create({talentsString:"00532012-00532500004501001-02"}),{customCondition:e=>e.getLevel()>=50}),Ce=t("P3 Saber Carnage",P.create({talentsString:"0053221-02505501000501031"}),{customCondition:e=>e.getLevel()>=50}),Se=t("P3 BF Poison",P.create({talentsString:"0053221205-02330520000501"}),{customCondition:e=>e.getLevel()>=50}),Oe={[O.Phase1]:[Ie],[O.Phase2]:[ve,me,he],[O.Phase3]:[ge,Ce,Se],[O.Phase4]:[],[O.Phase5]:[]},Pe=Oe[O.Phase3][0],Ae=Oe[O.Phase3][0];Oe[O.Phase3][0];const Te=A.create({honorAmongThievesCritRate:100}),ye=T.create({agilityElixir:y.ElixirOfAgility,dragonBreathChili:!1,strengthBuff:E.ElixirOfOgresStrength,mainHandImbue:b.WildStrikes,offHandImbue:b.DeadlyPoison}),Ee=L.create({aspectOfTheLion:!0,battleShout:k.TristateEffectRegular,fireResistanceAura:!0,fireResistanceTotem:!0,giftOfTheWild:k.TristateEffectImproved,strengthOfEarthTotem:k.TristateEffectImproved}),be=q.create({blessingOfMight:k.TristateEffectRegular}),Le=f.create({curseOfRecklessness:!0,dreamstate:!0,faerieFire:!0,sunderArmor:!0,mangle:!0}),ke={profession1:G.Engineering,profession2:G.Leatherworking},qe=l(H.SpecTankRogue,{cssClass:"tank-rogue-sim-ui",cssScheme:"rogue",knownIssues:["Rotations are not fully optimized, especially for non-standard setups."],warnings:[],epStats:[U.StatAgility,U.StatStrength,U.StatAttackPower,U.StatMeleeHit,U.StatMeleeCrit,U.StatMeleeHaste,U.StatSpellDamage,U.StatSpellPower,U.StatNaturePower,U.StatSpellHit,U.StatSpellCrit,U.StatDefense,U.StatArmor,U.StatBonusArmor,U.StatStamina,U.StatFireResistance],epPseudoStats:[R.PseudoStatMainHandDps,R.PseudoStatOffHandDps],epReferenceStat:U.StatAttackPower,displayStats:[U.StatHealth,U.StatAgility,U.StatStrength,U.StatAttackPower,U.StatSpellPower,U.StatMeleeHit,U.StatSpellHit,U.StatMeleeCrit,U.StatSpellCrit,U.StatMeleeHaste,U.StatStamina,U.StatDefense,U.StatDodge,U.StatParry,U.StatArmor,U.StatBonusArmor,U.StatFireResistance],defaults:{gear:le.gear,epWeights:n.fromMap({[U.StatAgility]:1.69,[U.StatStrength]:1.1,[U.StatAttackPower]:1,[U.StatDefense]:4,[U.StatSpellDamage]:.68,[U.StatNaturePower]:.68,[U.StatSpellCrit]:2,[U.StatSpellHit]:5.54,[U.StatMeleeHit]:14.2,[U.StatMeleeCrit]:8.64,[U.StatMeleeHaste]:6.51,[U.StatStamina]:.3,[U.StatArmor]:.01,[U.StatBonusArmor]:.01,[U.StatFireResistance]:.5},{[R.PseudoStatMainHandDps]:2.94,[R.PseudoStatOffHandDps]:2.45}),consumes:ye,talents:Pe.data,specOptions:Te,other:ke,raidBuffs:Ee,partyBuffs:w.create({}),individualBuffs:be,debuffs:Le},playerInputs:{inputs:[]},playerIconInputs:[],includeBuffDebuffInputs:[r,o,p,i,c,d],excludeBuffDebuffInputs:[],otherInputs:{inputs:[u,I,v,m,h,g,C,V]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[...Oe[O.Phase3],...Oe[O.Phase2],...Oe[O.Phase1]],rotations:[...de[O.Phase3],...de[O.Phase2],...de[O.Phase1]],gear:[...te[O.Phase3],...te[O.Phase2],...te[O.Phase1]]},autoRotation:e=>ue[e.getLevel()][e.getTalentTree()].rotation.rotation,raidSimPresets:[{spec:H.SpecTankRogue,tooltip:"Combat Tank",defaultName:"Combat",iconUrl:M(D.ClassRogue,0),talents:Ae.data,specOptions:Te,consumes:ye,defaultFactionRaces:{[B.Unknown]:x.RaceUnknown,[B.Alliance]:x.RaceHuman,[B.Horde]:x.RaceOrc},defaultGear:{[B.Unknown]:{},[B.Alliance]:{1:te[O.Phase1][0].gear},[B.Horde]:{1:te[O.Phase1][0].gear}}}]});class fe extends S{constructor(e,a){super(e,a,qe)}}export{fe as T};
