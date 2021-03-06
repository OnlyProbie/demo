export class UserInfos {
    constructor(name, _age) {
        this.name = name;
        this._age = _age;
        this.gender = 'male';
        this.publishNumber = 3;
        this.curNumber = 0;
        this.id = Math.random();
    }
    set age(value) {
        this._age = value;
    }
    get age() {
        return this._age;
    }
    publish(title) {
        if (this.curNumber <= this.publishNumber) {
            console.log('发表了文章 -- ' + title);
            this.curNumber++;
        }
    }
}
