import { PublicVariable } from './dir-including-index';
import './dir-including-index/internal';
import './dir/reachable';

console.log(PublicVariable);
