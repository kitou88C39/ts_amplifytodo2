// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { Todo, Read } = initSchema(schema);

export { Todo, Read };
