/* eslint-disable */ 
import http from "./http";
import http1 from "./httplog";
class APIDataService {
    async getAll() {
      return await http.get("one/survey/");
    }
    async getAllforquestions() {
      return await http.get("one/surveyQuestion/");
    }
    async getAlterforquestion(id) {
      return await http.get(`one/surveyQuestion/${id}/`);
    }

    async alterform(data,id){
      return await http.put(`one/surveyQuestion/${id}/`,data);
    }

    async alterformSurvey(id){
      return await http.get(`one/survey/${id}/`);
    }
    async alterSurvey(data,id){
      return await http.put(`one/survey/${id}/`,data);
    }
    async newinstanceSurvey(data){
      return await http.post(`one/survey/`,data);
    }

    async followerRetrive(){
      return await http.get(`one/follower/`);
    }
    // Authourization

    async loginUser(data){
      return await http1.post('auth/token/login/',data)
    }

    async logoutUser(){
      return await http.post('auth/token/logout/')
    }
    async signupUser(data){
      return await http1.post('auth/users/',data)
    }
  
  }
  
  export default new APIDataService();
