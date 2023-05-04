

const initialState = {
    User:{
        UserId:'1',
        role:'student',
    }
    ,
    Student:{
        IdStudent:'',
        StudentName:'',
    }
    ,
    jobs:{
        IdJobs: '',
        JobTitle: '',
    }   
}

const rootReducer =(state = initialState, action) =>
{
    switch(action.type){
        case 'jobs':
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    
                }
            }
        default:
            return state
    }

}
export default rootReducer