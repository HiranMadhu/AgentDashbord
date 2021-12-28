import React, {useEffect, useState} from "react"
import AppCard from "../../components/appCard"
import {appointmentDetails} from "./services/dashboard.service";


const AppointmentView = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const article = {          
            "requestHeader":{
                "requestId":"e54cb678-b7b2-11ca-b3de-0242ac13004",
                "timestamp":"2021-09-24T14:00:00.Z",
                "channel":"sca",
                "action":"PROFILE"
            },
            "agentId": 1,
            "pagination":{
                "pageSize": 10,
                "pageNumber": 0
            },
            "filterBy": ["INCOMPLETED","COMPLETED","SUCCESSFUL","REJECTED"] 
        
        }

        appointmentDetails(article)
            .then((response) => {
                setUser(response.data);
                setLoading(false);
            }).catch(error => {
                debugger
        });
    }, []);

    if (isLoading) {
        return <div>Loading</div>
    }

    return <AppCard listOfAppointments={user.appointmentList}/>
}
export default AppointmentView
