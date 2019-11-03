

class Office {
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaners(name) {
        let newCleaner = new Cleaner(name)
        this.cleaners.push(newCleaner)
    }
    hireManager(name) {
        let newManager = new Manager(name)
        this.managers.push(newManager)
    }
    startWorkDay() {
        this.managers.forEach(m => m.as)
    }

}