import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';

import Main from '../../pages/Main';

type Props = { isLogin: boolean };

const Login: React.FC<Props> = (props) => {
  const { isLogin } = props;
  // 認証状態を取得
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <div className='w-full　text-align: center'>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            {user ? <Main /> : <button onClick={signOut}>LogOut</button>}
          </main>
        )}
      </Authenticator>
    </div>
  );
};

export default Login;
