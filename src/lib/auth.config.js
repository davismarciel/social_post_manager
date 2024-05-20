/* eslint-disable import/prefer-default-export */

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    // Calling jwt function and getting the token and user created.
    // If the user is correctyl created, update and add the id and isAdmin field to it and returns the token.
    // JWT function puts the user information needed into the JWT token.
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    // Calling session to extract the token information and verify the user within the browser
    // Directing the user or admin to the right place.
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }

      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin');
      const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

      // IF USER IS NOT AN ADMIN AND TRIES TO ACCESS THE ADMIN PAGE
      if (!user?.isAdmin && isOnAdminPanel) {
        return false;
      }

      // IF USER IS NOT AUTHENTICATED AND TRIES TO ACCESS THE BLOG PAGE
      if (!user && isOnBlogPage) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN ACCESS THE LOGIN PAGE
      if (user && isOnLoginPage) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      return true;
    },
  },
};
