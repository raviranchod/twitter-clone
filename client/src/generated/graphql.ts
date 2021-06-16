import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthoriseResponse = {
  __typename?: 'AuthoriseResponse';
  user?: Maybe<User>;
  error?: Maybe<Scalars['String']>;
};

export type ComposeTweetDto = {
  userId: Scalars['ID'];
  tweet: Scalars['String'];
};

export type ComposeTweetResponse = {
  __typename?: 'ComposeTweetResponse';
  tweet?: Maybe<Tweet>;
  error?: Maybe<Scalars['String']>;
};


export type GetTweetsResponse = {
  __typename?: 'GetTweetsResponse';
  tweets?: Maybe<Array<Tweet>>;
  error?: Maybe<Scalars['String']>;
};

export type GetUserByUsernameDto = {
  username: Scalars['String'];
};

export type GetUserByUsernameResponse = {
  __typename?: 'GetUserByUsernameResponse';
  user?: Maybe<User>;
  error?: Maybe<Scalars['String']>;
};

export type GetUserResponse = {
  __typename?: 'GetUserResponse';
  user?: Maybe<User>;
  error?: Maybe<Scalars['String']>;
};

export type LoginDto = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginFieldError = {
  __typename?: 'LoginFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  user?: Maybe<User>;
  errors?: Maybe<Array<LoginFieldError>>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  success?: Maybe<Scalars['Boolean']>;
  error?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  composeTweet: ComposeTweetResponse;
  signup: SignupResponse;
  login: LoginResponse;
  logout: LogoutResponse;
};


export type MutationComposeTweetArgs = {
  tweet: ComposeTweetDto;
};


export type MutationSignupArgs = {
  user: SignupDto;
};


export type MutationLoginArgs = {
  user: LoginDto;
};

export type Query = {
  __typename?: 'Query';
  userByUsername: GetUserByUsernameResponse;
  authorise: AuthoriseResponse;
};


export type QueryUserByUsernameArgs = {
  user: GetUserByUsernameDto;
};

export type SignupDto = {
  name: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type SignupFieldError = {
  __typename?: 'SignupFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type SignupResponse = {
  __typename?: 'SignupResponse';
  user?: Maybe<User>;
  errors?: Maybe<Array<SignupFieldError>>;
};

export type Tweet = {
  __typename?: 'Tweet';
  id: Scalars['ID'];
  tweet: Scalars['String'];
  userId: Scalars['String'];
  user: GetUserResponse;
  created_at: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  tweets: GetTweetsResponse;
};

export type ComposeTweetMutationVariables = Exact<{
  userId: Scalars['ID'];
  tweet: Scalars['String'];
}>;


export type ComposeTweetMutation = (
  { __typename?: 'Mutation' }
  & { composeTweet: (
    { __typename?: 'ComposeTweetResponse' }
    & { tweet?: Maybe<(
      { __typename?: 'Tweet' }
      & Pick<Tweet, 'id' | 'tweet' | 'userId' | 'created_at'>
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'LoginFieldError' }
      & Pick<LoginFieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email' | 'username'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout: (
    { __typename?: 'LogoutResponse' }
    & Pick<LogoutResponse, 'success' | 'error'>
  ) }
);

export type SignupMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'SignupResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'SignupFieldError' }
      & Pick<SignupFieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email' | 'username'>
    )> }
  ) }
);

export type AuthoriseQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthoriseQuery = (
  { __typename?: 'Query' }
  & { authorise: (
    { __typename?: 'AuthoriseResponse' }
    & Pick<AuthoriseResponse, 'error'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email' | 'username'>
    )> }
  ) }
);

export type GetUserByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserByUsernameQuery = (
  { __typename?: 'Query' }
  & { userByUsername: (
    { __typename?: 'GetUserByUsernameResponse' }
    & Pick<GetUserByUsernameResponse, 'error'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name' | 'username'>
      & { tweets: (
        { __typename?: 'GetTweetsResponse' }
        & Pick<GetTweetsResponse, 'error'>
        & { tweets?: Maybe<Array<(
          { __typename?: 'Tweet' }
          & Pick<Tweet, 'id' | 'tweet' | 'created_at'>
          & { user: (
            { __typename?: 'GetUserResponse' }
            & Pick<GetUserResponse, 'error'>
            & { user?: Maybe<(
              { __typename?: 'User' }
              & Pick<User, 'name' | 'username'>
            )> }
          ) }
        )>> }
      ) }
    )> }
  ) }
);


export const ComposeTweetDocument = gql`
    mutation ComposeTweet($userId: ID!, $tweet: String!) {
  composeTweet(tweet: {userId: $userId, tweet: $tweet}) {
    tweet {
      id
      tweet
      userId
      created_at
    }
  }
}
    `;

export function useComposeTweetMutation() {
  return Urql.useMutation<ComposeTweetMutation, ComposeTweetMutationVariables>(ComposeTweetDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(user: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      name
      email
      username
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    success
    error
  }
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const SignupDocument = gql`
    mutation Signup($name: String!, $email: String!, $username: String!, $password: String!) {
  signup(
    user: {name: $name, email: $email, username: $username, password: $password}
  ) {
    errors {
      field
      message
    }
    user {
      id
      name
      email
      username
    }
  }
}
    `;

export function useSignupMutation() {
  return Urql.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument);
};
export const AuthoriseDocument = gql`
    query Authorise {
  authorise {
    error
    user {
      id
      name
      email
      username
    }
  }
}
    `;

export function useAuthoriseQuery(options: Omit<Urql.UseQueryArgs<AuthoriseQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AuthoriseQuery>({ query: AuthoriseDocument, ...options });
};
export const GetUserByUsernameDocument = gql`
    query GetUserByUsername($username: String!) {
  userByUsername(user: {username: $username}) {
    user {
      name
      username
      tweets {
        tweets {
          id
          tweet
          user {
            user {
              name
              username
            }
            error
          }
          created_at
        }
        error
      }
    }
    error
  }
}
    `;

export function useGetUserByUsernameQuery(options: Omit<Urql.UseQueryArgs<GetUserByUsernameQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserByUsernameQuery>({ query: GetUserByUsernameDocument, ...options });
};