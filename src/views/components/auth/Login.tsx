import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import Main from '../../pages/Main';

type Props = { isLogin: boolean };

const Header: React.FC<Props> = (props) => {
  const { isLogin } = props;
  // 認証状態を取得
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <div className='w-full'>
      <nav className='flex flex-wrap items-center justify-between p-4 bg-emerald-500'>
        <div className='flex items-center flex-shrink-0 mr-6 text-white'></div>

        <Authenticator>
          {({ signOut, user }) => (
            <main>
              {user ? (
                <h1 className='font-bold text-white'>
                  <button
                    onClick={signOut}
                    className='inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-emerald-700 hover:bg-white lg:mt-0'
                  >
                    {isLogin ? 'LogIn' : 'LogOut'}
                  </button>
                  <Main />
                </h1>
              ) : (
                <button onClick={signOut}>LogOut</button>
              )}
            </main>
          )}
        </Authenticator>
      </nav>
    </div>
  );
};

export default Header;
