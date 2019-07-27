'use strict';

class Model {

  constructor() {
    
  }

  get(_id) {
    if (_id) {
      return this.schema.findOne({ _id });
    }
    else { return this.schema.find({}); }
  }

  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(id, record) {
    return this.schema.findByIdAndUpdate(id, {record});

  }

  delete(_id) {
    return this.schema.findOneAndDelete(_id);
  }
}

module.exports = Model;