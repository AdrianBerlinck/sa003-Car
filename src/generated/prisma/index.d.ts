
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
 * Model veicle
 * 
 */
export type veicle = $Result.DefaultSelection<Prisma.$veiclePayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Veicles
 * const veicles = await prisma.veicle.findMany()
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
   * // Fetch zero or more Veicles
   * const veicles = await prisma.veicle.findMany()
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
   * `prisma.veicle`: Exposes CRUD operations for the **veicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veicles
    * const veicles = await prisma.veicle.findMany()
    * ```
    */
  get veicle(): Prisma.veicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    veicle: 'veicle',
    product: 'product'
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
      modelProps: "veicle" | "product"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      veicle: {
        payload: Prisma.$veiclePayload<ExtArgs>
        fields: Prisma.veicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.veicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.veicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload>
          }
          findFirst: {
            args: Prisma.veicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.veicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload>
          }
          findMany: {
            args: Prisma.veicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload>[]
          }
          create: {
            args: Prisma.veicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload>
          }
          createMany: {
            args: Prisma.veicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.veicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload>[]
          }
          delete: {
            args: Prisma.veicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload>
          }
          update: {
            args: Prisma.veicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload>
          }
          deleteMany: {
            args: Prisma.veicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.veicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.veicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload>[]
          }
          upsert: {
            args: Prisma.veicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veiclePayload>
          }
          aggregate: {
            args: Prisma.VeicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeicle>
          }
          groupBy: {
            args: Prisma.veicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.veicleCountArgs<ExtArgs>
            result: $Utils.Optional<VeicleCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
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
    veicle?: veicleOmit
    product?: productOmit
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
   * Models
   */

  /**
   * Model veicle
   */

  export type AggregateVeicle = {
    _count: VeicleCountAggregateOutputType | null
    _avg: VeicleAvgAggregateOutputType | null
    _sum: VeicleSumAggregateOutputType | null
    _min: VeicleMinAggregateOutputType | null
    _max: VeicleMaxAggregateOutputType | null
  }

  export type VeicleAvgAggregateOutputType = {
    quantidade: number | null
    q_port: number | null
  }

  export type VeicleSumAggregateOutputType = {
    quantidade: number | null
    q_port: number | null
  }

  export type VeicleMinAggregateOutputType = {
    id: string | null
    modelo: string | null
    cor: string | null
    quantidade: number | null
    q_port: number | null
  }

  export type VeicleMaxAggregateOutputType = {
    id: string | null
    modelo: string | null
    cor: string | null
    quantidade: number | null
    q_port: number | null
  }

  export type VeicleCountAggregateOutputType = {
    id: number
    modelo: number
    cor: number
    quantidade: number
    q_port: number
    _all: number
  }


  export type VeicleAvgAggregateInputType = {
    quantidade?: true
    q_port?: true
  }

  export type VeicleSumAggregateInputType = {
    quantidade?: true
    q_port?: true
  }

  export type VeicleMinAggregateInputType = {
    id?: true
    modelo?: true
    cor?: true
    quantidade?: true
    q_port?: true
  }

  export type VeicleMaxAggregateInputType = {
    id?: true
    modelo?: true
    cor?: true
    quantidade?: true
    q_port?: true
  }

  export type VeicleCountAggregateInputType = {
    id?: true
    modelo?: true
    cor?: true
    quantidade?: true
    q_port?: true
    _all?: true
  }

  export type VeicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veicle to aggregate.
     */
    where?: veicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veicles to fetch.
     */
    orderBy?: veicleOrderByWithRelationInput | veicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: veicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned veicles
    **/
    _count?: true | VeicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeicleMaxAggregateInputType
  }

  export type GetVeicleAggregateType<T extends VeicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVeicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeicle[P]>
      : GetScalarType<T[P], AggregateVeicle[P]>
  }




  export type veicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: veicleWhereInput
    orderBy?: veicleOrderByWithAggregationInput | veicleOrderByWithAggregationInput[]
    by: VeicleScalarFieldEnum[] | VeicleScalarFieldEnum
    having?: veicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeicleCountAggregateInputType | true
    _avg?: VeicleAvgAggregateInputType
    _sum?: VeicleSumAggregateInputType
    _min?: VeicleMinAggregateInputType
    _max?: VeicleMaxAggregateInputType
  }

  export type VeicleGroupByOutputType = {
    id: string
    modelo: string
    cor: string
    quantidade: number
    q_port: number
    _count: VeicleCountAggregateOutputType | null
    _avg: VeicleAvgAggregateOutputType | null
    _sum: VeicleSumAggregateOutputType | null
    _min: VeicleMinAggregateOutputType | null
    _max: VeicleMaxAggregateOutputType | null
  }

  type GetVeicleGroupByPayload<T extends veicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeicleGroupByOutputType[P]>
            : GetScalarType<T[P], VeicleGroupByOutputType[P]>
        }
      >
    >


  export type veicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    cor?: boolean
    quantidade?: boolean
    q_port?: boolean
  }, ExtArgs["result"]["veicle"]>

  export type veicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    cor?: boolean
    quantidade?: boolean
    q_port?: boolean
  }, ExtArgs["result"]["veicle"]>

  export type veicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    cor?: boolean
    quantidade?: boolean
    q_port?: boolean
  }, ExtArgs["result"]["veicle"]>

  export type veicleSelectScalar = {
    id?: boolean
    modelo?: boolean
    cor?: boolean
    quantidade?: boolean
    q_port?: boolean
  }

  export type veicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelo" | "cor" | "quantidade" | "q_port", ExtArgs["result"]["veicle"]>

  export type $veiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "veicle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelo: string
      cor: string
      quantidade: number
      q_port: number
    }, ExtArgs["result"]["veicle"]>
    composites: {}
  }

  type veicleGetPayload<S extends boolean | null | undefined | veicleDefaultArgs> = $Result.GetResult<Prisma.$veiclePayload, S>

  type veicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<veicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeicleCountAggregateInputType | true
    }

  export interface veicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['veicle'], meta: { name: 'veicle' } }
    /**
     * Find zero or one Veicle that matches the filter.
     * @param {veicleFindUniqueArgs} args - Arguments to find a Veicle
     * @example
     * // Get one Veicle
     * const veicle = await prisma.veicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends veicleFindUniqueArgs>(args: SelectSubset<T, veicleFindUniqueArgs<ExtArgs>>): Prisma__veicleClient<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {veicleFindUniqueOrThrowArgs} args - Arguments to find a Veicle
     * @example
     * // Get one Veicle
     * const veicle = await prisma.veicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends veicleFindUniqueOrThrowArgs>(args: SelectSubset<T, veicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__veicleClient<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veicleFindFirstArgs} args - Arguments to find a Veicle
     * @example
     * // Get one Veicle
     * const veicle = await prisma.veicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends veicleFindFirstArgs>(args?: SelectSubset<T, veicleFindFirstArgs<ExtArgs>>): Prisma__veicleClient<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veicleFindFirstOrThrowArgs} args - Arguments to find a Veicle
     * @example
     * // Get one Veicle
     * const veicle = await prisma.veicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends veicleFindFirstOrThrowArgs>(args?: SelectSubset<T, veicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__veicleClient<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veicles
     * const veicles = await prisma.veicle.findMany()
     * 
     * // Get first 10 Veicles
     * const veicles = await prisma.veicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veicleWithIdOnly = await prisma.veicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends veicleFindManyArgs>(args?: SelectSubset<T, veicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veicle.
     * @param {veicleCreateArgs} args - Arguments to create a Veicle.
     * @example
     * // Create one Veicle
     * const Veicle = await prisma.veicle.create({
     *   data: {
     *     // ... data to create a Veicle
     *   }
     * })
     * 
     */
    create<T extends veicleCreateArgs>(args: SelectSubset<T, veicleCreateArgs<ExtArgs>>): Prisma__veicleClient<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veicles.
     * @param {veicleCreateManyArgs} args - Arguments to create many Veicles.
     * @example
     * // Create many Veicles
     * const veicle = await prisma.veicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends veicleCreateManyArgs>(args?: SelectSubset<T, veicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veicles and returns the data saved in the database.
     * @param {veicleCreateManyAndReturnArgs} args - Arguments to create many Veicles.
     * @example
     * // Create many Veicles
     * const veicle = await prisma.veicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veicles and only return the `id`
     * const veicleWithIdOnly = await prisma.veicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends veicleCreateManyAndReturnArgs>(args?: SelectSubset<T, veicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veicle.
     * @param {veicleDeleteArgs} args - Arguments to delete one Veicle.
     * @example
     * // Delete one Veicle
     * const Veicle = await prisma.veicle.delete({
     *   where: {
     *     // ... filter to delete one Veicle
     *   }
     * })
     * 
     */
    delete<T extends veicleDeleteArgs>(args: SelectSubset<T, veicleDeleteArgs<ExtArgs>>): Prisma__veicleClient<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veicle.
     * @param {veicleUpdateArgs} args - Arguments to update one Veicle.
     * @example
     * // Update one Veicle
     * const veicle = await prisma.veicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends veicleUpdateArgs>(args: SelectSubset<T, veicleUpdateArgs<ExtArgs>>): Prisma__veicleClient<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veicles.
     * @param {veicleDeleteManyArgs} args - Arguments to filter Veicles to delete.
     * @example
     * // Delete a few Veicles
     * const { count } = await prisma.veicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends veicleDeleteManyArgs>(args?: SelectSubset<T, veicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veicles
     * const veicle = await prisma.veicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends veicleUpdateManyArgs>(args: SelectSubset<T, veicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veicles and returns the data updated in the database.
     * @param {veicleUpdateManyAndReturnArgs} args - Arguments to update many Veicles.
     * @example
     * // Update many Veicles
     * const veicle = await prisma.veicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veicles and only return the `id`
     * const veicleWithIdOnly = await prisma.veicle.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends veicleUpdateManyAndReturnArgs>(args: SelectSubset<T, veicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veicle.
     * @param {veicleUpsertArgs} args - Arguments to update or create a Veicle.
     * @example
     * // Update or create a Veicle
     * const veicle = await prisma.veicle.upsert({
     *   create: {
     *     // ... data to create a Veicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veicle we want to update
     *   }
     * })
     */
    upsert<T extends veicleUpsertArgs>(args: SelectSubset<T, veicleUpsertArgs<ExtArgs>>): Prisma__veicleClient<$Result.GetResult<Prisma.$veiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veicleCountArgs} args - Arguments to filter Veicles to count.
     * @example
     * // Count the number of Veicles
     * const count = await prisma.veicle.count({
     *   where: {
     *     // ... the filter for the Veicles we want to count
     *   }
     * })
    **/
    count<T extends veicleCountArgs>(
      args?: Subset<T, veicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeicleAggregateArgs>(args: Subset<T, VeicleAggregateArgs>): Prisma.PrismaPromise<GetVeicleAggregateType<T>>

    /**
     * Group by Veicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veicleGroupByArgs} args - Group by arguments.
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
      T extends veicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: veicleGroupByArgs['orderBy'] }
        : { orderBy?: veicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, veicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the veicle model
   */
  readonly fields: veicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for veicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__veicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the veicle model
   */
  interface veicleFieldRefs {
    readonly id: FieldRef<"veicle", 'String'>
    readonly modelo: FieldRef<"veicle", 'String'>
    readonly cor: FieldRef<"veicle", 'String'>
    readonly quantidade: FieldRef<"veicle", 'Int'>
    readonly q_port: FieldRef<"veicle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * veicle findUnique
   */
  export type veicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * Filter, which veicle to fetch.
     */
    where: veicleWhereUniqueInput
  }

  /**
   * veicle findUniqueOrThrow
   */
  export type veicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * Filter, which veicle to fetch.
     */
    where: veicleWhereUniqueInput
  }

  /**
   * veicle findFirst
   */
  export type veicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * Filter, which veicle to fetch.
     */
    where?: veicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veicles to fetch.
     */
    orderBy?: veicleOrderByWithRelationInput | veicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veicles.
     */
    cursor?: veicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veicles.
     */
    distinct?: VeicleScalarFieldEnum | VeicleScalarFieldEnum[]
  }

  /**
   * veicle findFirstOrThrow
   */
  export type veicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * Filter, which veicle to fetch.
     */
    where?: veicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veicles to fetch.
     */
    orderBy?: veicleOrderByWithRelationInput | veicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veicles.
     */
    cursor?: veicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veicles.
     */
    distinct?: VeicleScalarFieldEnum | VeicleScalarFieldEnum[]
  }

  /**
   * veicle findMany
   */
  export type veicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * Filter, which veicles to fetch.
     */
    where?: veicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veicles to fetch.
     */
    orderBy?: veicleOrderByWithRelationInput | veicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing veicles.
     */
    cursor?: veicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veicles.
     */
    skip?: number
    distinct?: VeicleScalarFieldEnum | VeicleScalarFieldEnum[]
  }

  /**
   * veicle create
   */
  export type veicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * The data needed to create a veicle.
     */
    data: XOR<veicleCreateInput, veicleUncheckedCreateInput>
  }

  /**
   * veicle createMany
   */
  export type veicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many veicles.
     */
    data: veicleCreateManyInput | veicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * veicle createManyAndReturn
   */
  export type veicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * The data used to create many veicles.
     */
    data: veicleCreateManyInput | veicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * veicle update
   */
  export type veicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * The data needed to update a veicle.
     */
    data: XOR<veicleUpdateInput, veicleUncheckedUpdateInput>
    /**
     * Choose, which veicle to update.
     */
    where: veicleWhereUniqueInput
  }

  /**
   * veicle updateMany
   */
  export type veicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update veicles.
     */
    data: XOR<veicleUpdateManyMutationInput, veicleUncheckedUpdateManyInput>
    /**
     * Filter which veicles to update
     */
    where?: veicleWhereInput
    /**
     * Limit how many veicles to update.
     */
    limit?: number
  }

  /**
   * veicle updateManyAndReturn
   */
  export type veicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * The data used to update veicles.
     */
    data: XOR<veicleUpdateManyMutationInput, veicleUncheckedUpdateManyInput>
    /**
     * Filter which veicles to update
     */
    where?: veicleWhereInput
    /**
     * Limit how many veicles to update.
     */
    limit?: number
  }

  /**
   * veicle upsert
   */
  export type veicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * The filter to search for the veicle to update in case it exists.
     */
    where: veicleWhereUniqueInput
    /**
     * In case the veicle found by the `where` argument doesn't exist, create a new veicle with this data.
     */
    create: XOR<veicleCreateInput, veicleUncheckedCreateInput>
    /**
     * In case the veicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<veicleUpdateInput, veicleUncheckedUpdateInput>
  }

  /**
   * veicle delete
   */
  export type veicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
    /**
     * Filter which veicle to delete.
     */
    where: veicleWhereUniqueInput
  }

  /**
   * veicle deleteMany
   */
  export type veicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veicles to delete
     */
    where?: veicleWhereInput
    /**
     * Limit how many veicles to delete.
     */
    limit?: number
  }

  /**
   * veicle without action
   */
  export type veicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veicle
     */
    select?: veicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veicle
     */
    omit?: veicleOmit<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    quantidade: number | null
  }

  export type ProductSumAggregateOutputType = {
    quantidade: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    mark: string | null
    quantidade: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mark: string | null
    quantidade: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    mark: number
    quantidade: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    quantidade?: true
  }

  export type ProductSumAggregateInputType = {
    quantidade?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    mark?: true
    quantidade?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    mark?: true
    quantidade?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    mark?: true
    quantidade?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    mark: string
    quantidade: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mark?: boolean
    quantidade?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mark?: boolean
    quantidade?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mark?: boolean
    quantidade?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    mark?: boolean
    quantidade?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mark" | "quantidade", ExtArgs["result"]["product"]>

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mark: string
      quantidade: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends productUpdateManyAndReturnArgs>(args: SelectSubset<T, productUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
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
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'String'>
    readonly name: FieldRef<"product", 'String'>
    readonly mark: FieldRef<"product", 'String'>
    readonly quantidade: FieldRef<"product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product updateManyAndReturn
   */
  export type productUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VeicleScalarFieldEnum: {
    id: 'id',
    modelo: 'modelo',
    cor: 'cor',
    quantidade: 'quantidade',
    q_port: 'q_port'
  };

  export type VeicleScalarFieldEnum = (typeof VeicleScalarFieldEnum)[keyof typeof VeicleScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mark: 'mark',
    quantidade: 'quantidade'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type veicleWhereInput = {
    AND?: veicleWhereInput | veicleWhereInput[]
    OR?: veicleWhereInput[]
    NOT?: veicleWhereInput | veicleWhereInput[]
    id?: StringFilter<"veicle"> | string
    modelo?: StringFilter<"veicle"> | string
    cor?: StringFilter<"veicle"> | string
    quantidade?: IntFilter<"veicle"> | number
    q_port?: IntFilter<"veicle"> | number
  }

  export type veicleOrderByWithRelationInput = {
    id?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    quantidade?: SortOrder
    q_port?: SortOrder
  }

  export type veicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: veicleWhereInput | veicleWhereInput[]
    OR?: veicleWhereInput[]
    NOT?: veicleWhereInput | veicleWhereInput[]
    modelo?: StringFilter<"veicle"> | string
    cor?: StringFilter<"veicle"> | string
    quantidade?: IntFilter<"veicle"> | number
    q_port?: IntFilter<"veicle"> | number
  }, "id">

  export type veicleOrderByWithAggregationInput = {
    id?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    quantidade?: SortOrder
    q_port?: SortOrder
    _count?: veicleCountOrderByAggregateInput
    _avg?: veicleAvgOrderByAggregateInput
    _max?: veicleMaxOrderByAggregateInput
    _min?: veicleMinOrderByAggregateInput
    _sum?: veicleSumOrderByAggregateInput
  }

  export type veicleScalarWhereWithAggregatesInput = {
    AND?: veicleScalarWhereWithAggregatesInput | veicleScalarWhereWithAggregatesInput[]
    OR?: veicleScalarWhereWithAggregatesInput[]
    NOT?: veicleScalarWhereWithAggregatesInput | veicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"veicle"> | string
    modelo?: StringWithAggregatesFilter<"veicle"> | string
    cor?: StringWithAggregatesFilter<"veicle"> | string
    quantidade?: IntWithAggregatesFilter<"veicle"> | number
    q_port?: IntWithAggregatesFilter<"veicle"> | number
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    mark?: StringFilter<"product"> | string
    quantidade?: IntFilter<"product"> | number
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mark?: SortOrder
    quantidade?: SortOrder
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    mark?: StringFilter<"product"> | string
    quantidade?: IntFilter<"product"> | number
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mark?: SortOrder
    quantidade?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"product"> | string
    name?: StringWithAggregatesFilter<"product"> | string
    mark?: StringWithAggregatesFilter<"product"> | string
    quantidade?: IntWithAggregatesFilter<"product"> | number
  }

  export type veicleCreateInput = {
    id: string
    modelo: string
    cor: string
    quantidade: number
    q_port: number
  }

  export type veicleUncheckedCreateInput = {
    id: string
    modelo: string
    cor: string
    quantidade: number
    q_port: number
  }

  export type veicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    q_port?: IntFieldUpdateOperationsInput | number
  }

  export type veicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    q_port?: IntFieldUpdateOperationsInput | number
  }

  export type veicleCreateManyInput = {
    id: string
    modelo: string
    cor: string
    quantidade: number
    q_port: number
  }

  export type veicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    q_port?: IntFieldUpdateOperationsInput | number
  }

  export type veicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    q_port?: IntFieldUpdateOperationsInput | number
  }

  export type productCreateInput = {
    id: string
    name: string
    mark: string
    quantidade: number
  }

  export type productUncheckedCreateInput = {
    id: string
    name: string
    mark: string
    quantidade: number
  }

  export type productUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mark?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type productUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mark?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type productCreateManyInput = {
    id: string
    name: string
    mark: string
    quantidade: number
  }

  export type productUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mark?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type productUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mark?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type veicleCountOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    quantidade?: SortOrder
    q_port?: SortOrder
  }

  export type veicleAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    q_port?: SortOrder
  }

  export type veicleMaxOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    quantidade?: SortOrder
    q_port?: SortOrder
  }

  export type veicleMinOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    quantidade?: SortOrder
    q_port?: SortOrder
  }

  export type veicleSumOrderByAggregateInput = {
    quantidade?: SortOrder
    q_port?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mark?: SortOrder
    quantidade?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mark?: SortOrder
    quantidade?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mark?: SortOrder
    quantidade?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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