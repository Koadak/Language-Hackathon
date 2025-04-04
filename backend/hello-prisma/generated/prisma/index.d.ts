
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Decks
 * 
 */
export type Decks = $Result.DefaultSelection<Prisma.$DecksPayload>
/**
 * Model FlashCards
 * 
 */
export type FlashCards = $Result.DefaultSelection<Prisma.$FlashCardsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.decks`: Exposes CRUD operations for the **Decks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.decks.findMany()
    * ```
    */
  get decks(): Prisma.DecksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashCards`: Exposes CRUD operations for the **FlashCards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashCards
    * const flashCards = await prisma.flashCards.findMany()
    * ```
    */
  get flashCards(): Prisma.FlashCardsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Decks: 'Decks',
    FlashCards: 'FlashCards'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "decks" | "flashCards"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Decks: {
        payload: Prisma.$DecksPayload<ExtArgs>
        fields: Prisma.DecksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          findFirst: {
            args: Prisma.DecksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          findMany: {
            args: Prisma.DecksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>[]
          }
          create: {
            args: Prisma.DecksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          createMany: {
            args: Prisma.DecksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DecksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>[]
          }
          delete: {
            args: Prisma.DecksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          update: {
            args: Prisma.DecksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          deleteMany: {
            args: Prisma.DecksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DecksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DecksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>[]
          }
          upsert: {
            args: Prisma.DecksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          aggregate: {
            args: Prisma.DecksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecks>
          }
          groupBy: {
            args: Prisma.DecksGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecksGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecksCountArgs<ExtArgs>
            result: $Utils.Optional<DecksCountAggregateOutputType> | number
          }
        }
      }
      FlashCards: {
        payload: Prisma.$FlashCardsPayload<ExtArgs>
        fields: Prisma.FlashCardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashCardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashCardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload>
          }
          findFirst: {
            args: Prisma.FlashCardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashCardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload>
          }
          findMany: {
            args: Prisma.FlashCardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload>[]
          }
          create: {
            args: Prisma.FlashCardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload>
          }
          createMany: {
            args: Prisma.FlashCardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashCardsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload>[]
          }
          delete: {
            args: Prisma.FlashCardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload>
          }
          update: {
            args: Prisma.FlashCardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload>
          }
          deleteMany: {
            args: Prisma.FlashCardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashCardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashCardsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload>[]
          }
          upsert: {
            args: Prisma.FlashCardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardsPayload>
          }
          aggregate: {
            args: Prisma.FlashCardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashCards>
          }
          groupBy: {
            args: Prisma.FlashCardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashCardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashCardsCountArgs<ExtArgs>
            result: $Utils.Optional<FlashCardsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    decks?: DecksOmit
    flashCards?: FlashCardsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    decks: number
    flash_cards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decks?: boolean | UserCountOutputTypeCountDecksArgs
    flash_cards?: boolean | UserCountOutputTypeCountFlash_cardsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecksWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlash_cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardsWhereInput
  }


  /**
   * Count Type DecksCountOutputType
   */

  export type DecksCountOutputType = {
    flash_cards: number
  }

  export type DecksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flash_cards?: boolean | DecksCountOutputTypeCountFlash_cardsArgs
  }

  // Custom InputTypes
  /**
   * DecksCountOutputType without action
   */
  export type DecksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecksCountOutputType
     */
    select?: DecksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DecksCountOutputType without action
   */
  export type DecksCountOutputTypeCountFlash_cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    decks?: boolean | User$decksArgs<ExtArgs>
    flash_cards?: boolean | User$flash_cardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    decks?: boolean | User$decksArgs<ExtArgs>
    flash_cards?: boolean | User$flash_cardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      decks: Prisma.$DecksPayload<ExtArgs>[]
      flash_cards: Prisma.$FlashCardsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    decks<T extends User$decksArgs<ExtArgs> = {}>(args?: Subset<T, User$decksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flash_cards<T extends User$flash_cardsArgs<ExtArgs> = {}>(args?: Subset<T, User$flash_cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.decks
   */
  export type User$decksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    where?: DecksWhereInput
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    cursor?: DecksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * User.flash_cards
   */
  export type User$flash_cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    where?: FlashCardsWhereInput
    orderBy?: FlashCardsOrderByWithRelationInput | FlashCardsOrderByWithRelationInput[]
    cursor?: FlashCardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashCardsScalarFieldEnum | FlashCardsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Decks
   */

  export type AggregateDecks = {
    _count: DecksCountAggregateOutputType | null
    _avg: DecksAvgAggregateOutputType | null
    _sum: DecksSumAggregateOutputType | null
    _min: DecksMinAggregateOutputType | null
    _max: DecksMaxAggregateOutputType | null
  }

  export type DecksAvgAggregateOutputType = {
    deck_id: number | null
    user_id: number | null
  }

  export type DecksSumAggregateOutputType = {
    deck_id: number | null
    user_id: number | null
  }

  export type DecksMinAggregateOutputType = {
    deck_id: number | null
    user_id: number | null
    deck_name: string | null
    isManaged: boolean | null
  }

  export type DecksMaxAggregateOutputType = {
    deck_id: number | null
    user_id: number | null
    deck_name: string | null
    isManaged: boolean | null
  }

  export type DecksCountAggregateOutputType = {
    deck_id: number
    user_id: number
    deck_name: number
    isManaged: number
    _all: number
  }


  export type DecksAvgAggregateInputType = {
    deck_id?: true
    user_id?: true
  }

  export type DecksSumAggregateInputType = {
    deck_id?: true
    user_id?: true
  }

  export type DecksMinAggregateInputType = {
    deck_id?: true
    user_id?: true
    deck_name?: true
    isManaged?: true
  }

  export type DecksMaxAggregateInputType = {
    deck_id?: true
    user_id?: true
    deck_name?: true
    isManaged?: true
  }

  export type DecksCountAggregateInputType = {
    deck_id?: true
    user_id?: true
    deck_name?: true
    isManaged?: true
    _all?: true
  }

  export type DecksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to aggregate.
     */
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
    **/
    _count?: true | DecksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DecksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DecksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecksMaxAggregateInputType
  }

  export type GetDecksAggregateType<T extends DecksAggregateArgs> = {
        [P in keyof T & keyof AggregateDecks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecks[P]>
      : GetScalarType<T[P], AggregateDecks[P]>
  }




  export type DecksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecksWhereInput
    orderBy?: DecksOrderByWithAggregationInput | DecksOrderByWithAggregationInput[]
    by: DecksScalarFieldEnum[] | DecksScalarFieldEnum
    having?: DecksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecksCountAggregateInputType | true
    _avg?: DecksAvgAggregateInputType
    _sum?: DecksSumAggregateInputType
    _min?: DecksMinAggregateInputType
    _max?: DecksMaxAggregateInputType
  }

  export type DecksGroupByOutputType = {
    deck_id: number
    user_id: number
    deck_name: string
    isManaged: boolean
    _count: DecksCountAggregateOutputType | null
    _avg: DecksAvgAggregateOutputType | null
    _sum: DecksSumAggregateOutputType | null
    _min: DecksMinAggregateOutputType | null
    _max: DecksMaxAggregateOutputType | null
  }

  type GetDecksGroupByPayload<T extends DecksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecksGroupByOutputType[P]>
            : GetScalarType<T[P], DecksGroupByOutputType[P]>
        }
      >
    >


  export type DecksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deck_id?: boolean
    user_id?: boolean
    deck_name?: boolean
    isManaged?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flash_cards?: boolean | Decks$flash_cardsArgs<ExtArgs>
    _count?: boolean | DecksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decks"]>

  export type DecksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deck_id?: boolean
    user_id?: boolean
    deck_name?: boolean
    isManaged?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decks"]>

  export type DecksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deck_id?: boolean
    user_id?: boolean
    deck_name?: boolean
    isManaged?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decks"]>

  export type DecksSelectScalar = {
    deck_id?: boolean
    user_id?: boolean
    deck_name?: boolean
    isManaged?: boolean
  }

  export type DecksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deck_id" | "user_id" | "deck_name" | "isManaged", ExtArgs["result"]["decks"]>
  export type DecksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flash_cards?: boolean | Decks$flash_cardsArgs<ExtArgs>
    _count?: boolean | DecksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DecksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DecksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DecksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Decks"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      flash_cards: Prisma.$FlashCardsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      deck_id: number
      user_id: number
      deck_name: string
      isManaged: boolean
    }, ExtArgs["result"]["decks"]>
    composites: {}
  }

  type DecksGetPayload<S extends boolean | null | undefined | DecksDefaultArgs> = $Result.GetResult<Prisma.$DecksPayload, S>

  type DecksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DecksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DecksCountAggregateInputType | true
    }

  export interface DecksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Decks'], meta: { name: 'Decks' } }
    /**
     * Find zero or one Decks that matches the filter.
     * @param {DecksFindUniqueArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DecksFindUniqueArgs>(args: SelectSubset<T, DecksFindUniqueArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Decks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DecksFindUniqueOrThrowArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DecksFindUniqueOrThrowArgs>(args: SelectSubset<T, DecksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksFindFirstArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DecksFindFirstArgs>(args?: SelectSubset<T, DecksFindFirstArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksFindFirstOrThrowArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DecksFindFirstOrThrowArgs>(args?: SelectSubset<T, DecksFindFirstOrThrowArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.decks.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.decks.findMany({ take: 10 })
     * 
     * // Only select the `deck_id`
     * const decksWithDeck_idOnly = await prisma.decks.findMany({ select: { deck_id: true } })
     * 
     */
    findMany<T extends DecksFindManyArgs>(args?: SelectSubset<T, DecksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Decks.
     * @param {DecksCreateArgs} args - Arguments to create a Decks.
     * @example
     * // Create one Decks
     * const Decks = await prisma.decks.create({
     *   data: {
     *     // ... data to create a Decks
     *   }
     * })
     * 
     */
    create<T extends DecksCreateArgs>(args: SelectSubset<T, DecksCreateArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decks.
     * @param {DecksCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const decks = await prisma.decks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DecksCreateManyArgs>(args?: SelectSubset<T, DecksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decks and returns the data saved in the database.
     * @param {DecksCreateManyAndReturnArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const decks = await prisma.decks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decks and only return the `deck_id`
     * const decksWithDeck_idOnly = await prisma.decks.createManyAndReturn({
     *   select: { deck_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DecksCreateManyAndReturnArgs>(args?: SelectSubset<T, DecksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Decks.
     * @param {DecksDeleteArgs} args - Arguments to delete one Decks.
     * @example
     * // Delete one Decks
     * const Decks = await prisma.decks.delete({
     *   where: {
     *     // ... filter to delete one Decks
     *   }
     * })
     * 
     */
    delete<T extends DecksDeleteArgs>(args: SelectSubset<T, DecksDeleteArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Decks.
     * @param {DecksUpdateArgs} args - Arguments to update one Decks.
     * @example
     * // Update one Decks
     * const decks = await prisma.decks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DecksUpdateArgs>(args: SelectSubset<T, DecksUpdateArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decks.
     * @param {DecksDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.decks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DecksDeleteManyArgs>(args?: SelectSubset<T, DecksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const decks = await prisma.decks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DecksUpdateManyArgs>(args: SelectSubset<T, DecksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks and returns the data updated in the database.
     * @param {DecksUpdateManyAndReturnArgs} args - Arguments to update many Decks.
     * @example
     * // Update many Decks
     * const decks = await prisma.decks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Decks and only return the `deck_id`
     * const decksWithDeck_idOnly = await prisma.decks.updateManyAndReturn({
     *   select: { deck_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DecksUpdateManyAndReturnArgs>(args: SelectSubset<T, DecksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Decks.
     * @param {DecksUpsertArgs} args - Arguments to update or create a Decks.
     * @example
     * // Update or create a Decks
     * const decks = await prisma.decks.upsert({
     *   create: {
     *     // ... data to create a Decks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Decks we want to update
     *   }
     * })
     */
    upsert<T extends DecksUpsertArgs>(args: SelectSubset<T, DecksUpsertArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.decks.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DecksCountArgs>(
      args?: Subset<T, DecksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DecksAggregateArgs>(args: Subset<T, DecksAggregateArgs>): Prisma.PrismaPromise<GetDecksAggregateType<T>>

    /**
     * Group by Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DecksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecksGroupByArgs['orderBy'] }
        : { orderBy?: DecksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DecksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Decks model
   */
  readonly fields: DecksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Decks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flash_cards<T extends Decks$flash_cardsArgs<ExtArgs> = {}>(args?: Subset<T, Decks$flash_cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Decks model
   */ 
  interface DecksFieldRefs {
    readonly deck_id: FieldRef<"Decks", 'Int'>
    readonly user_id: FieldRef<"Decks", 'Int'>
    readonly deck_name: FieldRef<"Decks", 'String'>
    readonly isManaged: FieldRef<"Decks", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Decks findUnique
   */
  export type DecksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where: DecksWhereUniqueInput
  }

  /**
   * Decks findUniqueOrThrow
   */
  export type DecksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where: DecksWhereUniqueInput
  }

  /**
   * Decks findFirst
   */
  export type DecksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * Decks findFirstOrThrow
   */
  export type DecksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * Decks findMany
   */
  export type DecksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     */
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * Decks create
   */
  export type DecksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * The data needed to create a Decks.
     */
    data: XOR<DecksCreateInput, DecksUncheckedCreateInput>
  }

  /**
   * Decks createMany
   */
  export type DecksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decks.
     */
    data: DecksCreateManyInput | DecksCreateManyInput[]
  }

  /**
   * Decks createManyAndReturn
   */
  export type DecksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * The data used to create many Decks.
     */
    data: DecksCreateManyInput | DecksCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Decks update
   */
  export type DecksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * The data needed to update a Decks.
     */
    data: XOR<DecksUpdateInput, DecksUncheckedUpdateInput>
    /**
     * Choose, which Decks to update.
     */
    where: DecksWhereUniqueInput
  }

  /**
   * Decks updateMany
   */
  export type DecksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decks.
     */
    data: XOR<DecksUpdateManyMutationInput, DecksUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DecksWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
  }

  /**
   * Decks updateManyAndReturn
   */
  export type DecksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * The data used to update Decks.
     */
    data: XOR<DecksUpdateManyMutationInput, DecksUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DecksWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Decks upsert
   */
  export type DecksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * The filter to search for the Decks to update in case it exists.
     */
    where: DecksWhereUniqueInput
    /**
     * In case the Decks found by the `where` argument doesn't exist, create a new Decks with this data.
     */
    create: XOR<DecksCreateInput, DecksUncheckedCreateInput>
    /**
     * In case the Decks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecksUpdateInput, DecksUncheckedUpdateInput>
  }

  /**
   * Decks delete
   */
  export type DecksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter which Decks to delete.
     */
    where: DecksWhereUniqueInput
  }

  /**
   * Decks deleteMany
   */
  export type DecksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to delete
     */
    where?: DecksWhereInput
    /**
     * Limit how many Decks to delete.
     */
    limit?: number
  }

  /**
   * Decks.flash_cards
   */
  export type Decks$flash_cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    where?: FlashCardsWhereInput
    orderBy?: FlashCardsOrderByWithRelationInput | FlashCardsOrderByWithRelationInput[]
    cursor?: FlashCardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashCardsScalarFieldEnum | FlashCardsScalarFieldEnum[]
  }

  /**
   * Decks without action
   */
  export type DecksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
  }


  /**
   * Model FlashCards
   */

  export type AggregateFlashCards = {
    _count: FlashCardsCountAggregateOutputType | null
    _avg: FlashCardsAvgAggregateOutputType | null
    _sum: FlashCardsSumAggregateOutputType | null
    _min: FlashCardsMinAggregateOutputType | null
    _max: FlashCardsMaxAggregateOutputType | null
  }

  export type FlashCardsAvgAggregateOutputType = {
    deck_id: number | null
    user_id: number | null
    fc_id: number | null
  }

  export type FlashCardsSumAggregateOutputType = {
    deck_id: number | null
    user_id: number | null
    fc_id: number | null
  }

  export type FlashCardsMinAggregateOutputType = {
    deck_id: number | null
    user_id: number | null
    fc_id: number | null
    fc_front: string | null
    fc_back: string | null
  }

  export type FlashCardsMaxAggregateOutputType = {
    deck_id: number | null
    user_id: number | null
    fc_id: number | null
    fc_front: string | null
    fc_back: string | null
  }

  export type FlashCardsCountAggregateOutputType = {
    deck_id: number
    user_id: number
    fc_id: number
    fc_front: number
    fc_back: number
    _all: number
  }


  export type FlashCardsAvgAggregateInputType = {
    deck_id?: true
    user_id?: true
    fc_id?: true
  }

  export type FlashCardsSumAggregateInputType = {
    deck_id?: true
    user_id?: true
    fc_id?: true
  }

  export type FlashCardsMinAggregateInputType = {
    deck_id?: true
    user_id?: true
    fc_id?: true
    fc_front?: true
    fc_back?: true
  }

  export type FlashCardsMaxAggregateInputType = {
    deck_id?: true
    user_id?: true
    fc_id?: true
    fc_front?: true
    fc_back?: true
  }

  export type FlashCardsCountAggregateInputType = {
    deck_id?: true
    user_id?: true
    fc_id?: true
    fc_front?: true
    fc_back?: true
    _all?: true
  }

  export type FlashCardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCards to aggregate.
     */
    where?: FlashCardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardsOrderByWithRelationInput | FlashCardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashCardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashCards
    **/
    _count?: true | FlashCardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlashCardsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlashCardsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashCardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashCardsMaxAggregateInputType
  }

  export type GetFlashCardsAggregateType<T extends FlashCardsAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashCards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashCards[P]>
      : GetScalarType<T[P], AggregateFlashCards[P]>
  }




  export type FlashCardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardsWhereInput
    orderBy?: FlashCardsOrderByWithAggregationInput | FlashCardsOrderByWithAggregationInput[]
    by: FlashCardsScalarFieldEnum[] | FlashCardsScalarFieldEnum
    having?: FlashCardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashCardsCountAggregateInputType | true
    _avg?: FlashCardsAvgAggregateInputType
    _sum?: FlashCardsSumAggregateInputType
    _min?: FlashCardsMinAggregateInputType
    _max?: FlashCardsMaxAggregateInputType
  }

  export type FlashCardsGroupByOutputType = {
    deck_id: number
    user_id: number
    fc_id: number
    fc_front: string
    fc_back: string
    _count: FlashCardsCountAggregateOutputType | null
    _avg: FlashCardsAvgAggregateOutputType | null
    _sum: FlashCardsSumAggregateOutputType | null
    _min: FlashCardsMinAggregateOutputType | null
    _max: FlashCardsMaxAggregateOutputType | null
  }

  type GetFlashCardsGroupByPayload<T extends FlashCardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashCardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashCardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashCardsGroupByOutputType[P]>
            : GetScalarType<T[P], FlashCardsGroupByOutputType[P]>
        }
      >
    >


  export type FlashCardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deck_id?: boolean
    user_id?: boolean
    fc_id?: boolean
    fc_front?: boolean
    fc_back?: boolean
    deck?: boolean | DecksDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCards"]>

  export type FlashCardsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deck_id?: boolean
    user_id?: boolean
    fc_id?: boolean
    fc_front?: boolean
    fc_back?: boolean
    deck?: boolean | DecksDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCards"]>

  export type FlashCardsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deck_id?: boolean
    user_id?: boolean
    fc_id?: boolean
    fc_front?: boolean
    fc_back?: boolean
    deck?: boolean | DecksDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCards"]>

  export type FlashCardsSelectScalar = {
    deck_id?: boolean
    user_id?: boolean
    fc_id?: boolean
    fc_front?: boolean
    fc_back?: boolean
  }

  export type FlashCardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deck_id" | "user_id" | "fc_id" | "fc_front" | "fc_back", ExtArgs["result"]["flashCards"]>
  export type FlashCardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DecksDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlashCardsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DecksDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlashCardsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deck?: boolean | DecksDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlashCardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashCards"
    objects: {
      deck: Prisma.$DecksPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      deck_id: number
      user_id: number
      fc_id: number
      fc_front: string
      fc_back: string
    }, ExtArgs["result"]["flashCards"]>
    composites: {}
  }

  type FlashCardsGetPayload<S extends boolean | null | undefined | FlashCardsDefaultArgs> = $Result.GetResult<Prisma.$FlashCardsPayload, S>

  type FlashCardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashCardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashCardsCountAggregateInputType | true
    }

  export interface FlashCardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashCards'], meta: { name: 'FlashCards' } }
    /**
     * Find zero or one FlashCards that matches the filter.
     * @param {FlashCardsFindUniqueArgs} args - Arguments to find a FlashCards
     * @example
     * // Get one FlashCards
     * const flashCards = await prisma.flashCards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashCardsFindUniqueArgs>(args: SelectSubset<T, FlashCardsFindUniqueArgs<ExtArgs>>): Prisma__FlashCardsClient<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashCards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashCardsFindUniqueOrThrowArgs} args - Arguments to find a FlashCards
     * @example
     * // Get one FlashCards
     * const flashCards = await prisma.flashCards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashCardsFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashCardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashCardsClient<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardsFindFirstArgs} args - Arguments to find a FlashCards
     * @example
     * // Get one FlashCards
     * const flashCards = await prisma.flashCards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashCardsFindFirstArgs>(args?: SelectSubset<T, FlashCardsFindFirstArgs<ExtArgs>>): Prisma__FlashCardsClient<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardsFindFirstOrThrowArgs} args - Arguments to find a FlashCards
     * @example
     * // Get one FlashCards
     * const flashCards = await prisma.flashCards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashCardsFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashCardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashCardsClient<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashCards
     * const flashCards = await prisma.flashCards.findMany()
     * 
     * // Get first 10 FlashCards
     * const flashCards = await prisma.flashCards.findMany({ take: 10 })
     * 
     * // Only select the `deck_id`
     * const flashCardsWithDeck_idOnly = await prisma.flashCards.findMany({ select: { deck_id: true } })
     * 
     */
    findMany<T extends FlashCardsFindManyArgs>(args?: SelectSubset<T, FlashCardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashCards.
     * @param {FlashCardsCreateArgs} args - Arguments to create a FlashCards.
     * @example
     * // Create one FlashCards
     * const FlashCards = await prisma.flashCards.create({
     *   data: {
     *     // ... data to create a FlashCards
     *   }
     * })
     * 
     */
    create<T extends FlashCardsCreateArgs>(args: SelectSubset<T, FlashCardsCreateArgs<ExtArgs>>): Prisma__FlashCardsClient<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashCards.
     * @param {FlashCardsCreateManyArgs} args - Arguments to create many FlashCards.
     * @example
     * // Create many FlashCards
     * const flashCards = await prisma.flashCards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashCardsCreateManyArgs>(args?: SelectSubset<T, FlashCardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlashCards and returns the data saved in the database.
     * @param {FlashCardsCreateManyAndReturnArgs} args - Arguments to create many FlashCards.
     * @example
     * // Create many FlashCards
     * const flashCards = await prisma.flashCards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlashCards and only return the `deck_id`
     * const flashCardsWithDeck_idOnly = await prisma.flashCards.createManyAndReturn({
     *   select: { deck_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashCardsCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashCardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlashCards.
     * @param {FlashCardsDeleteArgs} args - Arguments to delete one FlashCards.
     * @example
     * // Delete one FlashCards
     * const FlashCards = await prisma.flashCards.delete({
     *   where: {
     *     // ... filter to delete one FlashCards
     *   }
     * })
     * 
     */
    delete<T extends FlashCardsDeleteArgs>(args: SelectSubset<T, FlashCardsDeleteArgs<ExtArgs>>): Prisma__FlashCardsClient<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashCards.
     * @param {FlashCardsUpdateArgs} args - Arguments to update one FlashCards.
     * @example
     * // Update one FlashCards
     * const flashCards = await prisma.flashCards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashCardsUpdateArgs>(args: SelectSubset<T, FlashCardsUpdateArgs<ExtArgs>>): Prisma__FlashCardsClient<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashCards.
     * @param {FlashCardsDeleteManyArgs} args - Arguments to filter FlashCards to delete.
     * @example
     * // Delete a few FlashCards
     * const { count } = await prisma.flashCards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashCardsDeleteManyArgs>(args?: SelectSubset<T, FlashCardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashCards
     * const flashCards = await prisma.flashCards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashCardsUpdateManyArgs>(args: SelectSubset<T, FlashCardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCards and returns the data updated in the database.
     * @param {FlashCardsUpdateManyAndReturnArgs} args - Arguments to update many FlashCards.
     * @example
     * // Update many FlashCards
     * const flashCards = await prisma.flashCards.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlashCards and only return the `deck_id`
     * const flashCardsWithDeck_idOnly = await prisma.flashCards.updateManyAndReturn({
     *   select: { deck_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlashCardsUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashCardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlashCards.
     * @param {FlashCardsUpsertArgs} args - Arguments to update or create a FlashCards.
     * @example
     * // Update or create a FlashCards
     * const flashCards = await prisma.flashCards.upsert({
     *   create: {
     *     // ... data to create a FlashCards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashCards we want to update
     *   }
     * })
     */
    upsert<T extends FlashCardsUpsertArgs>(args: SelectSubset<T, FlashCardsUpsertArgs<ExtArgs>>): Prisma__FlashCardsClient<$Result.GetResult<Prisma.$FlashCardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardsCountArgs} args - Arguments to filter FlashCards to count.
     * @example
     * // Count the number of FlashCards
     * const count = await prisma.flashCards.count({
     *   where: {
     *     // ... the filter for the FlashCards we want to count
     *   }
     * })
    **/
    count<T extends FlashCardsCountArgs>(
      args?: Subset<T, FlashCardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashCardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlashCardsAggregateArgs>(args: Subset<T, FlashCardsAggregateArgs>): Prisma.PrismaPromise<GetFlashCardsAggregateType<T>>

    /**
     * Group by FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlashCardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashCardsGroupByArgs['orderBy'] }
        : { orderBy?: FlashCardsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlashCardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashCardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashCards model
   */
  readonly fields: FlashCardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashCards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashCardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deck<T extends DecksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DecksDefaultArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlashCards model
   */ 
  interface FlashCardsFieldRefs {
    readonly deck_id: FieldRef<"FlashCards", 'Int'>
    readonly user_id: FieldRef<"FlashCards", 'Int'>
    readonly fc_id: FieldRef<"FlashCards", 'Int'>
    readonly fc_front: FieldRef<"FlashCards", 'String'>
    readonly fc_back: FieldRef<"FlashCards", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FlashCards findUnique
   */
  export type FlashCardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    /**
     * Filter, which FlashCards to fetch.
     */
    where: FlashCardsWhereUniqueInput
  }

  /**
   * FlashCards findUniqueOrThrow
   */
  export type FlashCardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    /**
     * Filter, which FlashCards to fetch.
     */
    where: FlashCardsWhereUniqueInput
  }

  /**
   * FlashCards findFirst
   */
  export type FlashCardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    /**
     * Filter, which FlashCards to fetch.
     */
    where?: FlashCardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardsOrderByWithRelationInput | FlashCardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardsScalarFieldEnum | FlashCardsScalarFieldEnum[]
  }

  /**
   * FlashCards findFirstOrThrow
   */
  export type FlashCardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    /**
     * Filter, which FlashCards to fetch.
     */
    where?: FlashCardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardsOrderByWithRelationInput | FlashCardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardsScalarFieldEnum | FlashCardsScalarFieldEnum[]
  }

  /**
   * FlashCards findMany
   */
  export type FlashCardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    /**
     * Filter, which FlashCards to fetch.
     */
    where?: FlashCardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardsOrderByWithRelationInput | FlashCardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashCards.
     */
    cursor?: FlashCardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    distinct?: FlashCardsScalarFieldEnum | FlashCardsScalarFieldEnum[]
  }

  /**
   * FlashCards create
   */
  export type FlashCardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashCards.
     */
    data: XOR<FlashCardsCreateInput, FlashCardsUncheckedCreateInput>
  }

  /**
   * FlashCards createMany
   */
  export type FlashCardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashCards.
     */
    data: FlashCardsCreateManyInput | FlashCardsCreateManyInput[]
  }

  /**
   * FlashCards createManyAndReturn
   */
  export type FlashCardsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * The data used to create many FlashCards.
     */
    data: FlashCardsCreateManyInput | FlashCardsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCards update
   */
  export type FlashCardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashCards.
     */
    data: XOR<FlashCardsUpdateInput, FlashCardsUncheckedUpdateInput>
    /**
     * Choose, which FlashCards to update.
     */
    where: FlashCardsWhereUniqueInput
  }

  /**
   * FlashCards updateMany
   */
  export type FlashCardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashCards.
     */
    data: XOR<FlashCardsUpdateManyMutationInput, FlashCardsUncheckedUpdateManyInput>
    /**
     * Filter which FlashCards to update
     */
    where?: FlashCardsWhereInput
    /**
     * Limit how many FlashCards to update.
     */
    limit?: number
  }

  /**
   * FlashCards updateManyAndReturn
   */
  export type FlashCardsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * The data used to update FlashCards.
     */
    data: XOR<FlashCardsUpdateManyMutationInput, FlashCardsUncheckedUpdateManyInput>
    /**
     * Filter which FlashCards to update
     */
    where?: FlashCardsWhereInput
    /**
     * Limit how many FlashCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCards upsert
   */
  export type FlashCardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashCards to update in case it exists.
     */
    where: FlashCardsWhereUniqueInput
    /**
     * In case the FlashCards found by the `where` argument doesn't exist, create a new FlashCards with this data.
     */
    create: XOR<FlashCardsCreateInput, FlashCardsUncheckedCreateInput>
    /**
     * In case the FlashCards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashCardsUpdateInput, FlashCardsUncheckedUpdateInput>
  }

  /**
   * FlashCards delete
   */
  export type FlashCardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
    /**
     * Filter which FlashCards to delete.
     */
    where: FlashCardsWhereUniqueInput
  }

  /**
   * FlashCards deleteMany
   */
  export type FlashCardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCards to delete
     */
    where?: FlashCardsWhereInput
    /**
     * Limit how many FlashCards to delete.
     */
    limit?: number
  }

  /**
   * FlashCards without action
   */
  export type FlashCardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCards
     */
    select?: FlashCardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCards
     */
    omit?: FlashCardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DecksScalarFieldEnum: {
    deck_id: 'deck_id',
    user_id: 'user_id',
    deck_name: 'deck_name',
    isManaged: 'isManaged'
  };

  export type DecksScalarFieldEnum = (typeof DecksScalarFieldEnum)[keyof typeof DecksScalarFieldEnum]


  export const FlashCardsScalarFieldEnum: {
    deck_id: 'deck_id',
    user_id: 'user_id',
    fc_id: 'fc_id',
    fc_front: 'fc_front',
    fc_back: 'fc_back'
  };

  export type FlashCardsScalarFieldEnum = (typeof FlashCardsScalarFieldEnum)[keyof typeof FlashCardsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    decks?: DecksListRelationFilter
    flash_cards?: FlashCardsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    decks?: DecksOrderByRelationAggregateInput
    flash_cards?: FlashCardsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    decks?: DecksListRelationFilter
    flash_cards?: FlashCardsListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type DecksWhereInput = {
    AND?: DecksWhereInput | DecksWhereInput[]
    OR?: DecksWhereInput[]
    NOT?: DecksWhereInput | DecksWhereInput[]
    deck_id?: IntFilter<"Decks"> | number
    user_id?: IntFilter<"Decks"> | number
    deck_name?: StringFilter<"Decks"> | string
    isManaged?: BoolFilter<"Decks"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flash_cards?: FlashCardsListRelationFilter
  }

  export type DecksOrderByWithRelationInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_name?: SortOrder
    isManaged?: SortOrder
    user?: UserOrderByWithRelationInput
    flash_cards?: FlashCardsOrderByRelationAggregateInput
  }

  export type DecksWhereUniqueInput = Prisma.AtLeast<{
    deck_id?: number
    AND?: DecksWhereInput | DecksWhereInput[]
    OR?: DecksWhereInput[]
    NOT?: DecksWhereInput | DecksWhereInput[]
    user_id?: IntFilter<"Decks"> | number
    deck_name?: StringFilter<"Decks"> | string
    isManaged?: BoolFilter<"Decks"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flash_cards?: FlashCardsListRelationFilter
  }, "deck_id">

  export type DecksOrderByWithAggregationInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_name?: SortOrder
    isManaged?: SortOrder
    _count?: DecksCountOrderByAggregateInput
    _avg?: DecksAvgOrderByAggregateInput
    _max?: DecksMaxOrderByAggregateInput
    _min?: DecksMinOrderByAggregateInput
    _sum?: DecksSumOrderByAggregateInput
  }

  export type DecksScalarWhereWithAggregatesInput = {
    AND?: DecksScalarWhereWithAggregatesInput | DecksScalarWhereWithAggregatesInput[]
    OR?: DecksScalarWhereWithAggregatesInput[]
    NOT?: DecksScalarWhereWithAggregatesInput | DecksScalarWhereWithAggregatesInput[]
    deck_id?: IntWithAggregatesFilter<"Decks"> | number
    user_id?: IntWithAggregatesFilter<"Decks"> | number
    deck_name?: StringWithAggregatesFilter<"Decks"> | string
    isManaged?: BoolWithAggregatesFilter<"Decks"> | boolean
  }

  export type FlashCardsWhereInput = {
    AND?: FlashCardsWhereInput | FlashCardsWhereInput[]
    OR?: FlashCardsWhereInput[]
    NOT?: FlashCardsWhereInput | FlashCardsWhereInput[]
    deck_id?: IntFilter<"FlashCards"> | number
    user_id?: IntFilter<"FlashCards"> | number
    fc_id?: IntFilter<"FlashCards"> | number
    fc_front?: StringFilter<"FlashCards"> | string
    fc_back?: StringFilter<"FlashCards"> | string
    deck?: XOR<DecksScalarRelationFilter, DecksWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlashCardsOrderByWithRelationInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    fc_id?: SortOrder
    fc_front?: SortOrder
    fc_back?: SortOrder
    deck?: DecksOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FlashCardsWhereUniqueInput = Prisma.AtLeast<{
    fc_id?: number
    AND?: FlashCardsWhereInput | FlashCardsWhereInput[]
    OR?: FlashCardsWhereInput[]
    NOT?: FlashCardsWhereInput | FlashCardsWhereInput[]
    deck_id?: IntFilter<"FlashCards"> | number
    user_id?: IntFilter<"FlashCards"> | number
    fc_front?: StringFilter<"FlashCards"> | string
    fc_back?: StringFilter<"FlashCards"> | string
    deck?: XOR<DecksScalarRelationFilter, DecksWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "fc_id">

  export type FlashCardsOrderByWithAggregationInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    fc_id?: SortOrder
    fc_front?: SortOrder
    fc_back?: SortOrder
    _count?: FlashCardsCountOrderByAggregateInput
    _avg?: FlashCardsAvgOrderByAggregateInput
    _max?: FlashCardsMaxOrderByAggregateInput
    _min?: FlashCardsMinOrderByAggregateInput
    _sum?: FlashCardsSumOrderByAggregateInput
  }

  export type FlashCardsScalarWhereWithAggregatesInput = {
    AND?: FlashCardsScalarWhereWithAggregatesInput | FlashCardsScalarWhereWithAggregatesInput[]
    OR?: FlashCardsScalarWhereWithAggregatesInput[]
    NOT?: FlashCardsScalarWhereWithAggregatesInput | FlashCardsScalarWhereWithAggregatesInput[]
    deck_id?: IntWithAggregatesFilter<"FlashCards"> | number
    user_id?: IntWithAggregatesFilter<"FlashCards"> | number
    fc_id?: IntWithAggregatesFilter<"FlashCards"> | number
    fc_front?: StringWithAggregatesFilter<"FlashCards"> | string
    fc_back?: StringWithAggregatesFilter<"FlashCards"> | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    decks?: DecksCreateNestedManyWithoutUserInput
    flash_cards?: FlashCardsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    email: string
    password: string
    decks?: DecksUncheckedCreateNestedManyWithoutUserInput
    flash_cards?: FlashCardsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    decks?: DecksUpdateManyWithoutUserNestedInput
    flash_cards?: FlashCardsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    decks?: DecksUncheckedUpdateManyWithoutUserNestedInput
    flash_cards?: FlashCardsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DecksCreateInput = {
    deck_name: string
    isManaged?: boolean
    user: UserCreateNestedOneWithoutDecksInput
    flash_cards?: FlashCardsCreateNestedManyWithoutDeckInput
  }

  export type DecksUncheckedCreateInput = {
    deck_id?: number
    user_id: number
    deck_name: string
    isManaged?: boolean
    flash_cards?: FlashCardsUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DecksUpdateInput = {
    deck_name?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
    flash_cards?: FlashCardsUpdateManyWithoutDeckNestedInput
  }

  export type DecksUncheckedUpdateInput = {
    deck_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    deck_name?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    flash_cards?: FlashCardsUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DecksCreateManyInput = {
    deck_id?: number
    user_id: number
    deck_name: string
    isManaged?: boolean
  }

  export type DecksUpdateManyMutationInput = {
    deck_name?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DecksUncheckedUpdateManyInput = {
    deck_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    deck_name?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlashCardsCreateInput = {
    fc_front: string
    fc_back: string
    deck: DecksCreateNestedOneWithoutFlash_cardsInput
    user: UserCreateNestedOneWithoutFlash_cardsInput
  }

  export type FlashCardsUncheckedCreateInput = {
    deck_id: number
    user_id: number
    fc_id?: number
    fc_front: string
    fc_back: string
  }

  export type FlashCardsUpdateInput = {
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
    deck?: DecksUpdateOneRequiredWithoutFlash_cardsNestedInput
    user?: UserUpdateOneRequiredWithoutFlash_cardsNestedInput
  }

  export type FlashCardsUncheckedUpdateInput = {
    deck_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fc_id?: IntFieldUpdateOperationsInput | number
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
  }

  export type FlashCardsCreateManyInput = {
    deck_id: number
    user_id: number
    fc_id?: number
    fc_front: string
    fc_back: string
  }

  export type FlashCardsUpdateManyMutationInput = {
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
  }

  export type FlashCardsUncheckedUpdateManyInput = {
    deck_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    fc_id?: IntFieldUpdateOperationsInput | number
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecksListRelationFilter = {
    every?: DecksWhereInput
    some?: DecksWhereInput
    none?: DecksWhereInput
  }

  export type FlashCardsListRelationFilter = {
    every?: FlashCardsWhereInput
    some?: FlashCardsWhereInput
    none?: FlashCardsWhereInput
  }

  export type DecksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlashCardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DecksCountOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_name?: SortOrder
    isManaged?: SortOrder
  }

  export type DecksAvgOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
  }

  export type DecksMaxOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_name?: SortOrder
    isManaged?: SortOrder
  }

  export type DecksMinOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    deck_name?: SortOrder
    isManaged?: SortOrder
  }

  export type DecksSumOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecksScalarRelationFilter = {
    is?: DecksWhereInput
    isNot?: DecksWhereInput
  }

  export type FlashCardsCountOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    fc_id?: SortOrder
    fc_front?: SortOrder
    fc_back?: SortOrder
  }

  export type FlashCardsAvgOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    fc_id?: SortOrder
  }

  export type FlashCardsMaxOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    fc_id?: SortOrder
    fc_front?: SortOrder
    fc_back?: SortOrder
  }

  export type FlashCardsMinOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    fc_id?: SortOrder
    fc_front?: SortOrder
    fc_back?: SortOrder
  }

  export type FlashCardsSumOrderByAggregateInput = {
    deck_id?: SortOrder
    user_id?: SortOrder
    fc_id?: SortOrder
  }

  export type DecksCreateNestedManyWithoutUserInput = {
    create?: XOR<DecksCreateWithoutUserInput, DecksUncheckedCreateWithoutUserInput> | DecksCreateWithoutUserInput[] | DecksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DecksCreateOrConnectWithoutUserInput | DecksCreateOrConnectWithoutUserInput[]
    createMany?: DecksCreateManyUserInputEnvelope
    connect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
  }

  export type FlashCardsCreateNestedManyWithoutUserInput = {
    create?: XOR<FlashCardsCreateWithoutUserInput, FlashCardsUncheckedCreateWithoutUserInput> | FlashCardsCreateWithoutUserInput[] | FlashCardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashCardsCreateOrConnectWithoutUserInput | FlashCardsCreateOrConnectWithoutUserInput[]
    createMany?: FlashCardsCreateManyUserInputEnvelope
    connect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
  }

  export type DecksUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DecksCreateWithoutUserInput, DecksUncheckedCreateWithoutUserInput> | DecksCreateWithoutUserInput[] | DecksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DecksCreateOrConnectWithoutUserInput | DecksCreateOrConnectWithoutUserInput[]
    createMany?: DecksCreateManyUserInputEnvelope
    connect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
  }

  export type FlashCardsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlashCardsCreateWithoutUserInput, FlashCardsUncheckedCreateWithoutUserInput> | FlashCardsCreateWithoutUserInput[] | FlashCardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashCardsCreateOrConnectWithoutUserInput | FlashCardsCreateOrConnectWithoutUserInput[]
    createMany?: FlashCardsCreateManyUserInputEnvelope
    connect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecksUpdateManyWithoutUserNestedInput = {
    create?: XOR<DecksCreateWithoutUserInput, DecksUncheckedCreateWithoutUserInput> | DecksCreateWithoutUserInput[] | DecksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DecksCreateOrConnectWithoutUserInput | DecksCreateOrConnectWithoutUserInput[]
    upsert?: DecksUpsertWithWhereUniqueWithoutUserInput | DecksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DecksCreateManyUserInputEnvelope
    set?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    disconnect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    delete?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    connect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    update?: DecksUpdateWithWhereUniqueWithoutUserInput | DecksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DecksUpdateManyWithWhereWithoutUserInput | DecksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DecksScalarWhereInput | DecksScalarWhereInput[]
  }

  export type FlashCardsUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlashCardsCreateWithoutUserInput, FlashCardsUncheckedCreateWithoutUserInput> | FlashCardsCreateWithoutUserInput[] | FlashCardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashCardsCreateOrConnectWithoutUserInput | FlashCardsCreateOrConnectWithoutUserInput[]
    upsert?: FlashCardsUpsertWithWhereUniqueWithoutUserInput | FlashCardsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlashCardsCreateManyUserInputEnvelope
    set?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    disconnect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    delete?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    connect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    update?: FlashCardsUpdateWithWhereUniqueWithoutUserInput | FlashCardsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlashCardsUpdateManyWithWhereWithoutUserInput | FlashCardsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlashCardsScalarWhereInput | FlashCardsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecksUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DecksCreateWithoutUserInput, DecksUncheckedCreateWithoutUserInput> | DecksCreateWithoutUserInput[] | DecksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DecksCreateOrConnectWithoutUserInput | DecksCreateOrConnectWithoutUserInput[]
    upsert?: DecksUpsertWithWhereUniqueWithoutUserInput | DecksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DecksCreateManyUserInputEnvelope
    set?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    disconnect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    delete?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    connect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    update?: DecksUpdateWithWhereUniqueWithoutUserInput | DecksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DecksUpdateManyWithWhereWithoutUserInput | DecksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DecksScalarWhereInput | DecksScalarWhereInput[]
  }

  export type FlashCardsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlashCardsCreateWithoutUserInput, FlashCardsUncheckedCreateWithoutUserInput> | FlashCardsCreateWithoutUserInput[] | FlashCardsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashCardsCreateOrConnectWithoutUserInput | FlashCardsCreateOrConnectWithoutUserInput[]
    upsert?: FlashCardsUpsertWithWhereUniqueWithoutUserInput | FlashCardsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlashCardsCreateManyUserInputEnvelope
    set?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    disconnect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    delete?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    connect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    update?: FlashCardsUpdateWithWhereUniqueWithoutUserInput | FlashCardsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlashCardsUpdateManyWithWhereWithoutUserInput | FlashCardsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlashCardsScalarWhereInput | FlashCardsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDecksInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    connect?: UserWhereUniqueInput
  }

  export type FlashCardsCreateNestedManyWithoutDeckInput = {
    create?: XOR<FlashCardsCreateWithoutDeckInput, FlashCardsUncheckedCreateWithoutDeckInput> | FlashCardsCreateWithoutDeckInput[] | FlashCardsUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FlashCardsCreateOrConnectWithoutDeckInput | FlashCardsCreateOrConnectWithoutDeckInput[]
    createMany?: FlashCardsCreateManyDeckInputEnvelope
    connect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
  }

  export type FlashCardsUncheckedCreateNestedManyWithoutDeckInput = {
    create?: XOR<FlashCardsCreateWithoutDeckInput, FlashCardsUncheckedCreateWithoutDeckInput> | FlashCardsCreateWithoutDeckInput[] | FlashCardsUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FlashCardsCreateOrConnectWithoutDeckInput | FlashCardsCreateOrConnectWithoutDeckInput[]
    createMany?: FlashCardsCreateManyDeckInputEnvelope
    connect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutDecksNestedInput = {
    create?: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDecksInput
    upsert?: UserUpsertWithoutDecksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDecksInput, UserUpdateWithoutDecksInput>, UserUncheckedUpdateWithoutDecksInput>
  }

  export type FlashCardsUpdateManyWithoutDeckNestedInput = {
    create?: XOR<FlashCardsCreateWithoutDeckInput, FlashCardsUncheckedCreateWithoutDeckInput> | FlashCardsCreateWithoutDeckInput[] | FlashCardsUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FlashCardsCreateOrConnectWithoutDeckInput | FlashCardsCreateOrConnectWithoutDeckInput[]
    upsert?: FlashCardsUpsertWithWhereUniqueWithoutDeckInput | FlashCardsUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: FlashCardsCreateManyDeckInputEnvelope
    set?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    disconnect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    delete?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    connect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    update?: FlashCardsUpdateWithWhereUniqueWithoutDeckInput | FlashCardsUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: FlashCardsUpdateManyWithWhereWithoutDeckInput | FlashCardsUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: FlashCardsScalarWhereInput | FlashCardsScalarWhereInput[]
  }

  export type FlashCardsUncheckedUpdateManyWithoutDeckNestedInput = {
    create?: XOR<FlashCardsCreateWithoutDeckInput, FlashCardsUncheckedCreateWithoutDeckInput> | FlashCardsCreateWithoutDeckInput[] | FlashCardsUncheckedCreateWithoutDeckInput[]
    connectOrCreate?: FlashCardsCreateOrConnectWithoutDeckInput | FlashCardsCreateOrConnectWithoutDeckInput[]
    upsert?: FlashCardsUpsertWithWhereUniqueWithoutDeckInput | FlashCardsUpsertWithWhereUniqueWithoutDeckInput[]
    createMany?: FlashCardsCreateManyDeckInputEnvelope
    set?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    disconnect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    delete?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    connect?: FlashCardsWhereUniqueInput | FlashCardsWhereUniqueInput[]
    update?: FlashCardsUpdateWithWhereUniqueWithoutDeckInput | FlashCardsUpdateWithWhereUniqueWithoutDeckInput[]
    updateMany?: FlashCardsUpdateManyWithWhereWithoutDeckInput | FlashCardsUpdateManyWithWhereWithoutDeckInput[]
    deleteMany?: FlashCardsScalarWhereInput | FlashCardsScalarWhereInput[]
  }

  export type DecksCreateNestedOneWithoutFlash_cardsInput = {
    create?: XOR<DecksCreateWithoutFlash_cardsInput, DecksUncheckedCreateWithoutFlash_cardsInput>
    connectOrCreate?: DecksCreateOrConnectWithoutFlash_cardsInput
    connect?: DecksWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlash_cardsInput = {
    create?: XOR<UserCreateWithoutFlash_cardsInput, UserUncheckedCreateWithoutFlash_cardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlash_cardsInput
    connect?: UserWhereUniqueInput
  }

  export type DecksUpdateOneRequiredWithoutFlash_cardsNestedInput = {
    create?: XOR<DecksCreateWithoutFlash_cardsInput, DecksUncheckedCreateWithoutFlash_cardsInput>
    connectOrCreate?: DecksCreateOrConnectWithoutFlash_cardsInput
    upsert?: DecksUpsertWithoutFlash_cardsInput
    connect?: DecksWhereUniqueInput
    update?: XOR<XOR<DecksUpdateToOneWithWhereWithoutFlash_cardsInput, DecksUpdateWithoutFlash_cardsInput>, DecksUncheckedUpdateWithoutFlash_cardsInput>
  }

  export type UserUpdateOneRequiredWithoutFlash_cardsNestedInput = {
    create?: XOR<UserCreateWithoutFlash_cardsInput, UserUncheckedCreateWithoutFlash_cardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlash_cardsInput
    upsert?: UserUpsertWithoutFlash_cardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlash_cardsInput, UserUpdateWithoutFlash_cardsInput>, UserUncheckedUpdateWithoutFlash_cardsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecksCreateWithoutUserInput = {
    deck_name: string
    isManaged?: boolean
    flash_cards?: FlashCardsCreateNestedManyWithoutDeckInput
  }

  export type DecksUncheckedCreateWithoutUserInput = {
    deck_id?: number
    deck_name: string
    isManaged?: boolean
    flash_cards?: FlashCardsUncheckedCreateNestedManyWithoutDeckInput
  }

  export type DecksCreateOrConnectWithoutUserInput = {
    where: DecksWhereUniqueInput
    create: XOR<DecksCreateWithoutUserInput, DecksUncheckedCreateWithoutUserInput>
  }

  export type DecksCreateManyUserInputEnvelope = {
    data: DecksCreateManyUserInput | DecksCreateManyUserInput[]
  }

  export type FlashCardsCreateWithoutUserInput = {
    fc_front: string
    fc_back: string
    deck: DecksCreateNestedOneWithoutFlash_cardsInput
  }

  export type FlashCardsUncheckedCreateWithoutUserInput = {
    deck_id: number
    fc_id?: number
    fc_front: string
    fc_back: string
  }

  export type FlashCardsCreateOrConnectWithoutUserInput = {
    where: FlashCardsWhereUniqueInput
    create: XOR<FlashCardsCreateWithoutUserInput, FlashCardsUncheckedCreateWithoutUserInput>
  }

  export type FlashCardsCreateManyUserInputEnvelope = {
    data: FlashCardsCreateManyUserInput | FlashCardsCreateManyUserInput[]
  }

  export type DecksUpsertWithWhereUniqueWithoutUserInput = {
    where: DecksWhereUniqueInput
    update: XOR<DecksUpdateWithoutUserInput, DecksUncheckedUpdateWithoutUserInput>
    create: XOR<DecksCreateWithoutUserInput, DecksUncheckedCreateWithoutUserInput>
  }

  export type DecksUpdateWithWhereUniqueWithoutUserInput = {
    where: DecksWhereUniqueInput
    data: XOR<DecksUpdateWithoutUserInput, DecksUncheckedUpdateWithoutUserInput>
  }

  export type DecksUpdateManyWithWhereWithoutUserInput = {
    where: DecksScalarWhereInput
    data: XOR<DecksUpdateManyMutationInput, DecksUncheckedUpdateManyWithoutUserInput>
  }

  export type DecksScalarWhereInput = {
    AND?: DecksScalarWhereInput | DecksScalarWhereInput[]
    OR?: DecksScalarWhereInput[]
    NOT?: DecksScalarWhereInput | DecksScalarWhereInput[]
    deck_id?: IntFilter<"Decks"> | number
    user_id?: IntFilter<"Decks"> | number
    deck_name?: StringFilter<"Decks"> | string
    isManaged?: BoolFilter<"Decks"> | boolean
  }

  export type FlashCardsUpsertWithWhereUniqueWithoutUserInput = {
    where: FlashCardsWhereUniqueInput
    update: XOR<FlashCardsUpdateWithoutUserInput, FlashCardsUncheckedUpdateWithoutUserInput>
    create: XOR<FlashCardsCreateWithoutUserInput, FlashCardsUncheckedCreateWithoutUserInput>
  }

  export type FlashCardsUpdateWithWhereUniqueWithoutUserInput = {
    where: FlashCardsWhereUniqueInput
    data: XOR<FlashCardsUpdateWithoutUserInput, FlashCardsUncheckedUpdateWithoutUserInput>
  }

  export type FlashCardsUpdateManyWithWhereWithoutUserInput = {
    where: FlashCardsScalarWhereInput
    data: XOR<FlashCardsUpdateManyMutationInput, FlashCardsUncheckedUpdateManyWithoutUserInput>
  }

  export type FlashCardsScalarWhereInput = {
    AND?: FlashCardsScalarWhereInput | FlashCardsScalarWhereInput[]
    OR?: FlashCardsScalarWhereInput[]
    NOT?: FlashCardsScalarWhereInput | FlashCardsScalarWhereInput[]
    deck_id?: IntFilter<"FlashCards"> | number
    user_id?: IntFilter<"FlashCards"> | number
    fc_id?: IntFilter<"FlashCards"> | number
    fc_front?: StringFilter<"FlashCards"> | string
    fc_back?: StringFilter<"FlashCards"> | string
  }

  export type UserCreateWithoutDecksInput = {
    email: string
    password: string
    flash_cards?: FlashCardsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDecksInput = {
    user_id?: number
    email: string
    password: string
    flash_cards?: FlashCardsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDecksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
  }

  export type FlashCardsCreateWithoutDeckInput = {
    fc_front: string
    fc_back: string
    user: UserCreateNestedOneWithoutFlash_cardsInput
  }

  export type FlashCardsUncheckedCreateWithoutDeckInput = {
    user_id: number
    fc_id?: number
    fc_front: string
    fc_back: string
  }

  export type FlashCardsCreateOrConnectWithoutDeckInput = {
    where: FlashCardsWhereUniqueInput
    create: XOR<FlashCardsCreateWithoutDeckInput, FlashCardsUncheckedCreateWithoutDeckInput>
  }

  export type FlashCardsCreateManyDeckInputEnvelope = {
    data: FlashCardsCreateManyDeckInput | FlashCardsCreateManyDeckInput[]
  }

  export type UserUpsertWithoutDecksInput = {
    update: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
    create: XOR<UserCreateWithoutDecksInput, UserUncheckedCreateWithoutDecksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDecksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDecksInput, UserUncheckedUpdateWithoutDecksInput>
  }

  export type UserUpdateWithoutDecksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    flash_cards?: FlashCardsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDecksInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    flash_cards?: FlashCardsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlashCardsUpsertWithWhereUniqueWithoutDeckInput = {
    where: FlashCardsWhereUniqueInput
    update: XOR<FlashCardsUpdateWithoutDeckInput, FlashCardsUncheckedUpdateWithoutDeckInput>
    create: XOR<FlashCardsCreateWithoutDeckInput, FlashCardsUncheckedCreateWithoutDeckInput>
  }

  export type FlashCardsUpdateWithWhereUniqueWithoutDeckInput = {
    where: FlashCardsWhereUniqueInput
    data: XOR<FlashCardsUpdateWithoutDeckInput, FlashCardsUncheckedUpdateWithoutDeckInput>
  }

  export type FlashCardsUpdateManyWithWhereWithoutDeckInput = {
    where: FlashCardsScalarWhereInput
    data: XOR<FlashCardsUpdateManyMutationInput, FlashCardsUncheckedUpdateManyWithoutDeckInput>
  }

  export type DecksCreateWithoutFlash_cardsInput = {
    deck_name: string
    isManaged?: boolean
    user: UserCreateNestedOneWithoutDecksInput
  }

  export type DecksUncheckedCreateWithoutFlash_cardsInput = {
    deck_id?: number
    user_id: number
    deck_name: string
    isManaged?: boolean
  }

  export type DecksCreateOrConnectWithoutFlash_cardsInput = {
    where: DecksWhereUniqueInput
    create: XOR<DecksCreateWithoutFlash_cardsInput, DecksUncheckedCreateWithoutFlash_cardsInput>
  }

  export type UserCreateWithoutFlash_cardsInput = {
    email: string
    password: string
    decks?: DecksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlash_cardsInput = {
    user_id?: number
    email: string
    password: string
    decks?: DecksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlash_cardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlash_cardsInput, UserUncheckedCreateWithoutFlash_cardsInput>
  }

  export type DecksUpsertWithoutFlash_cardsInput = {
    update: XOR<DecksUpdateWithoutFlash_cardsInput, DecksUncheckedUpdateWithoutFlash_cardsInput>
    create: XOR<DecksCreateWithoutFlash_cardsInput, DecksUncheckedCreateWithoutFlash_cardsInput>
    where?: DecksWhereInput
  }

  export type DecksUpdateToOneWithWhereWithoutFlash_cardsInput = {
    where?: DecksWhereInput
    data: XOR<DecksUpdateWithoutFlash_cardsInput, DecksUncheckedUpdateWithoutFlash_cardsInput>
  }

  export type DecksUpdateWithoutFlash_cardsInput = {
    deck_name?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutDecksNestedInput
  }

  export type DecksUncheckedUpdateWithoutFlash_cardsInput = {
    deck_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    deck_name?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutFlash_cardsInput = {
    update: XOR<UserUpdateWithoutFlash_cardsInput, UserUncheckedUpdateWithoutFlash_cardsInput>
    create: XOR<UserCreateWithoutFlash_cardsInput, UserUncheckedCreateWithoutFlash_cardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlash_cardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlash_cardsInput, UserUncheckedUpdateWithoutFlash_cardsInput>
  }

  export type UserUpdateWithoutFlash_cardsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    decks?: DecksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlash_cardsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    decks?: DecksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DecksCreateManyUserInput = {
    deck_id?: number
    deck_name: string
    isManaged?: boolean
  }

  export type FlashCardsCreateManyUserInput = {
    deck_id: number
    fc_id?: number
    fc_front: string
    fc_back: string
  }

  export type DecksUpdateWithoutUserInput = {
    deck_name?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    flash_cards?: FlashCardsUpdateManyWithoutDeckNestedInput
  }

  export type DecksUncheckedUpdateWithoutUserInput = {
    deck_id?: IntFieldUpdateOperationsInput | number
    deck_name?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
    flash_cards?: FlashCardsUncheckedUpdateManyWithoutDeckNestedInput
  }

  export type DecksUncheckedUpdateManyWithoutUserInput = {
    deck_id?: IntFieldUpdateOperationsInput | number
    deck_name?: StringFieldUpdateOperationsInput | string
    isManaged?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlashCardsUpdateWithoutUserInput = {
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
    deck?: DecksUpdateOneRequiredWithoutFlash_cardsNestedInput
  }

  export type FlashCardsUncheckedUpdateWithoutUserInput = {
    deck_id?: IntFieldUpdateOperationsInput | number
    fc_id?: IntFieldUpdateOperationsInput | number
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
  }

  export type FlashCardsUncheckedUpdateManyWithoutUserInput = {
    deck_id?: IntFieldUpdateOperationsInput | number
    fc_id?: IntFieldUpdateOperationsInput | number
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
  }

  export type FlashCardsCreateManyDeckInput = {
    user_id: number
    fc_id?: number
    fc_front: string
    fc_back: string
  }

  export type FlashCardsUpdateWithoutDeckInput = {
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFlash_cardsNestedInput
  }

  export type FlashCardsUncheckedUpdateWithoutDeckInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    fc_id?: IntFieldUpdateOperationsInput | number
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
  }

  export type FlashCardsUncheckedUpdateManyWithoutDeckInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    fc_id?: IntFieldUpdateOperationsInput | number
    fc_front?: StringFieldUpdateOperationsInput | string
    fc_back?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}