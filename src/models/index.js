// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { Todo, Read } = initSchema(schema);

<<<<<<< Updated upstream
export { Todo, Read };
=======

const { Todo, Read } = initSchema(schema);

export {
  Todo,
  Read
};
>>>>>>> Stashed changes
