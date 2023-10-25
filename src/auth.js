const Auth = {
    // function to handler user signup

    signup: async(user) =>{
        try{

          // var raw = JSON.stringify({
            
          // });
          // console.log(raw);

          const response = await fetch(
            "https://academics.newtonschool.co/api/v1/user/signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Set content type to JSON
                projectId: "f104bi07c490",
              },

              body: JSON.stringify({
                ...user,
                appType: 'ott',
            
              })
            }
          );
           
              if (!response.ok) {
                throw new Error('Signup failed');
              }

              return true;

        }catch (error){
            console.error('Signup error:', error);
            throw error;
        }
    },

    // Function to handler user login

    login: async (credentials) => {
        try {
          const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              projectId: "f104bi07c490",
            },
            body: JSON.stringify({
              ...credentials,
              appType: 'ott',
            }),
          });
    
          if (!response.ok) {
            throw new Error('Authentication failed');
          }

          const data = await response.json();
        const { token, data: loginData } = data;
        const { name: userName } = loginData;
        const { email: userEmail } = loginData;
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("userInfoN", userName);
        sessionStorage.setItem("userInfoE", userEmail);
        return data;
      } catch (error) {
        console.error('Authentication error:', error);
        throw error; 
      }
    },

    // function to handle user logout

    logout: () => {
        try {
          // Clear the JWT token (and user data) from storage (e.g., cookies)
          sessionStorage.removeItem('authToken');
          sessionStorage.removeItem('userInfoN');
          sessionStorage.removeItem('userInfoE');
        } catch (error) {
          console.error('Logout error:', error);
        }
      },
    
      // Function to check if the user is authenticated
      isAuthenticated: () => {
       
          const token = sessionStorage.getItem('authToken');
          
          return !!token;
      },
    };

    export default Auth;