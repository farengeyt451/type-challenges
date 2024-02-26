/*
  1 - Extract
  -------
  ### Question

  Implement the built-in `Extract<Type, Union>` generic without using it.
*/

/* _____________ Your Code Here _____________ */

type MyExtract<T, U> = T extends U ? T : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Extract<Todo, { title: string}>, MyExtract<Todo, { title: string}>>>,
  Expect<Equal<Extract<"a" | "b" | "c", "a" | "f">, MyExtract<"a" | "b" | "c", "a" | "f">>>,
]

type Todo =
  {title: string} |
  {description: string} |
  {completed: boolean}


type MyExtractTest = MyExtract<Todo, {title: string}>
