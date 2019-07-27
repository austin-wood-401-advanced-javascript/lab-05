const Categories = require('../../models-singular/categories.js');
const supergoose = require('../supergoose.js');


describe('Categories Model (Singular)', () => {

  let model;

  beforeEach(() => {
    model = new Categories();
  });

  it('can create() a new category', () => {

    let obj = { name: 'Test' };

    return model.create(obj)
      .then(createdRecord => model.get(createdRecord.id))
      .then(returnedRecord => {
        expect(returnedRecord.name).toEqual(obj.name);
      })
      .catch(err => console.error('ERR', err));
  });

  it('can get() a category', () => {

    let obj = { name: 'Test' };

    return model.create(obj)
      .then(createdRecord => {
        return model.get(createdRecord._id)
          .then(returnedRecord => {
            Object.keys(obj).forEach(element => {
              expect(returnedRecord.name).toEqual(obj.name);
            });
          });
      });
  });

  it('can delete() a category', () => {

    let obj = { name: 'Test' };

    return model.create(obj)
      .then(createdObj => {
        return model.delete(createdObj._id)
          .then(deltedRecord => {
            console.log(deltedRecord._id);
            expect(deltedRecord.name).toEqual(obj.name);

          });

      });

  });

  xit('can update() a category', () => {

    let obj = { name: 'Test' };

    return model.create(obj)
      .then(createdRecord => {
        let updatedRecord = {...createdRecord, name: 'Updated'};
        let updatedId = createdRecord.id;
        model.update(updatedId, updatedRecord);

        expect(updatedId).toEqual(createdRecord.id);
        expect(updatedRecord.name).toEqual('Updated');
      });
  });

  it('can get() all categories when no id is passed', () => {

    let obj = { name: 'Test' };

    return model.create(obj)
      .then(createdRecord => {
        return model.get(createdRecord)
          .then(foundRecord => {
            Object.keys(obj).forEach(key => {
              expect(foundRecord.name).toEqual(obj.name);
            });
          });
      });
  });

});