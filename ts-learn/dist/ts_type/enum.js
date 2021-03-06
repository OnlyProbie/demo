export var Genders;
(function (Genders) {
    Genders["Male"] = "\u7537";
    Genders["Female"] = "\u5973";
})(Genders || (Genders = {}));
export let genders;
genders = Genders.Male;
genders = Genders.Female;
export function searchUsers(g) {
}
export var Level;
(function (Level) {
    Level[Level["level1"] = 0] = "level1";
    Level[Level["level2"] = 1] = "level2";
    Level[Level["level3"] = 2] = "level3";
})(Level || (Level = {}));
let l = Level.level1;
l = Level.level2;
console.log(l);
console.log(l);
let lv = 1;
lv = 2;
var Permission;
(function (Permission) {
    Permission[Permission["Read"] = 1] = "Read";
    Permission[Permission["Write"] = 2] = "Write";
    Permission[Permission["Create"] = 4] = "Create";
    Permission[Permission["Delete"] = 8] = "Delete";
})(Permission || (Permission = {}));
let p = Permission.Read | Permission.Write;
function hasPermission(target, per) {
    return (target & per) === per;
}
const hasPer = hasPermission(p, Permission.Write);
console.log(hasPer);
p = p ^ Permission.Write;
