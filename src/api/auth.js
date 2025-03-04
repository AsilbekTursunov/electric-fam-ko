import post from './https'

class Api {
  resetPsw(data){
    return post('/resetPsw', data)
  }
  login(data){
    return post('/login', data)
  }
  logout(){
    return post('/logout')
  }
  findPsw(data){
    return post('/findPsw', data)
  }
  findId(data){
    return post('/findId', data)
  }
}

export default new Api()