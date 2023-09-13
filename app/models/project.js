import Model, { attr } from '@ember-data/model';

//ProjectModel is a class that extends the Model class from ember-data.
//It has three attributes: title, description, and url. The @attr decorator is used to define the attributes of the model.
export default class ProjectModel extends Model {
  @attr('string') title;
  @attr('string') description;
}
