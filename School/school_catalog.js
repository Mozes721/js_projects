class School {
  constructor(name,level,numberOfStudents, averageTestScores){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
		this._averageTestScores = averageTestScores;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
get averageTestScores() {
  return this._averageTestScores;
}
  set numberOfStudents(value){
    if(value.isNaN()){
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    
  }else{
      this._numberOfStudents = value;
    }
  }
  set averageTestScores(value){
    if(value.isNaN()){
      console.log('Invalid input: averageTestScores must be set to a Number.');
    
  }else{
      this._averageTestScores = value;
    }
  }
  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level and ${this.averageTestScores}`)
  }
  static 
  pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(Math.random() * substituteTeachers.lenght);
    return substituteTeachers[randInt];
  }
}
class PrimarySchool extends School {
  constructor(name,numberOfStudents, pickupPolicy, averageTestScores){
    super(name, 'primary', numberOfStudents, averageTestScores);
    this._pickupPolicy = pickupPolicy;
    
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}
class HighSchool extends School {
  constructor(name,numberOfStudents, sportsTeams,averageTestScores){
    super(name, 'high', numberOfStudents, averageTestScores);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
  }
}
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const allSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(allSmith.sportsTeams);
