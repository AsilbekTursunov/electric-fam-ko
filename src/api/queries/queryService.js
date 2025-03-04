const API_URL = "https://ap-south-1.cdn.hygraph.com/content/" + 
    "cm6ro5sar01l807usrpwia5a0/master" // Replace with your Hygraph API URL

const token = import.meta.env.VITE_TOKEN || ''

const queryService = {
  async getUser(userNumber) {
    const query = `
      query {
        userIfo(where: { userName: "${userNumber}" }) {
          userName
          userNameE
          userNameE2
          userPassword
          offNum
          lastLoginDate
          jobtitleName
          hpNum
          establishmentName
          eMail
          deptName
        }
      }
    `
    
    try {
      const response = await fetch(API_URL, {
        method: "POST",  // Using POST for GraphQL queries
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,  // Authorization if needed
        },
        body: JSON.stringify({ query }),  // Pass the query as JSON body
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()  // Wait for the response to be parsed
      console.log("Fetched data:", data)
      return data  // Return the data as needed

    } catch (error) {
      console.error("Error fetching data:", error)
    }
  },
  // Update User data
  updateUser(userNumber, updatedData) {
    const query = `
    mutation {
      updateUserIfo(
        where: { userName: "${userNumber}" }
        data: {
          userName: "${updatedData.userName}"
          userNameE: "${updatedData.userNameE}"
          userNameE2: "${updatedData.userNameE2}"
          userPassword: "${updatedData.userPassword}"
          offNum: "${updatedData.offNum}"
          lastLoginDate: "${updatedData.lastLoginDate}"
          jobtitleName: "${updatedData.jobtitleName}"
          hpNum: "${updatedData.hpNum}"
          establishmentName: "${updatedData.establishmentName}"
          eMail: "${updatedData.eMail}"
          deptName: "${updatedData.deptName}"
        }
      ) {
        userName
        userNameE
        userNameE2
        userPassword
        offNum
        lastLoginDate
        jobtitleName
        hpNum
        establishmentName
        eMail
        deptName
      }
      publishUserIfo(where: { userName: "${userNumber}" }) {
        userName
        userNameE
        userNameE2
        userPassword
        offNum
        lastLoginDate
        jobtitleName
        hpNum
        establishmentName
        eMail
        deptName
      }
    }
  `

    const result = fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then(data => {
        return data
      })
      .catch(error => {
        console.error("Error updating user:", error)
      })

    return result 
  },
  async login(data) {
    const mutation = `
      mutation Login($username: String!, $userpassword: String!) {
        login(data: {username: $username, userpassword: $userpassword}) {
          token
          user {
            id
            username
          }
        }
      }
    `
  
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          username: data.username,
          userpassword: data.userpassword
        }
      }),
    }).then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json()
    }).catch((err) => new Error(err))
  }
}


export default queryService