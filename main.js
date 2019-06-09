const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses(){
    //this method returns an object that contains the key:value pairs for apps, mains, and desserts
    return {
      appetizers: this.appetizers, //'this' references the contents of the above arrays.  arrays will be populated using the setter methods
      mains: this.mains,
      desserts: this.desserts
    }
  },
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
