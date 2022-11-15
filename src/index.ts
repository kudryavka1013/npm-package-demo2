import hello from 'hello-npm-pkg'
import { cloneDeep } from 'lodash';
interface TestInterface {
  name: string
}

const a = [1, 2, 3]
let b = cloneDeep(a)

export default b

export const c: TestInterface = {
  name: 'c'
}

export const d = hello
