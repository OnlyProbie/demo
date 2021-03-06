// 枚举
// 枚举会出现在编译结果中，编译结果中表现为一个对象
// 枚举的字段值可以是字符串或者数字

export enum Genders {
  Male = '男',
  Female = '女'
}

export let genders: Genders

genders = Genders.Male
genders = Genders.Female

export function searchUsers (g: Genders) {

}

// 数字枚举的值会自动自增
export enum Level {
  level1,
  level2,
  level3
}

let l: Level = Level.level1
l = Level.level2
console.log(l)
console.log(l)

// 被数字枚举约束的变量，可以直接赋值为数字
let lv: Level = 1
lv = 2

// 数字枚举的编译结果和字符串枚举有差距
// 尽量不要在一个枚举中既出现字符串字段，又出现数字字段
// 使用枚举时，尽量使用枚举字段的值，不要去使用真实的值

// 扩展：枚举的位运算

// 权限举例：
enum Permission {
  Read = 1, // 2^0  0001
  Write = 2, // 2^1  0010
  Create = 4, // 2^2  0100
  Delete = 8 // 2^3  1000
}

//1 组合权限 (或运算)
let p = Permission.Read | Permission.Write

//2 如何判断是不是拥有某个权限 (与运算)
function hasPermission (target:Permission, per:Permission) {
  return (target & per) === per
}

// 判断变量p是否拥有可读权限
const hasPer = hasPermission(p, Permission.Write)
console.log(hasPer)

//3 如何删除某个权限 (异或运算)
p = p ^ Permission.Write


