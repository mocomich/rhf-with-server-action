export type FormState =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      fieldErrors: {
        email?: string[] | undefined;
        name?: string[] | undefined;
      };
    }
  | {
      status: 'idle';
    };
