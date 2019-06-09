const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses(){},
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appIn){
    this.appetizers.push(appIn);
  },
  get mains(){
    return this._courses.mains;
  },
  set mains(mainIn){
    this.mains.push(mainIn);
  },
  get desserts(){
    return this.courses.desserts;
  },
  set desserts(dessIn){
    this.desserts.push(dessIn);
  }
};
