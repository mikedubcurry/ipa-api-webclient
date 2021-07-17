# Auth workflow
- user first sees log in screen and search bar plus 5 random drinks
- logging in sends a request to supabase for authentication token which is stored in a cookie/localStorage for 1hr or after each page visit. once expired, user is un-authenticated

