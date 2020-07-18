import React from 'react';
import axios from "axios";
import "./style.css";
import AgencyCode from "./DeptDropdown.js";

function DeptInfo() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [agencies, setAgencies] = useState([]);

    useEffect(() => {
        fetch("https://api.usaspending.gov/api/v2/agency/"+ AgencyCode + "/");
            then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setName(result.name);
                    setAbbreviation(result.abbreviation);
                    setIcon(result.icon);
                    setMission(result.mission);
                    setWebsite(result.website);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div> Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else{
        return(
            <div>
            <h3> {result.name}</h3>
            <h4> {result.abbreviation}</h4>
            <img src={result.icon} class="mr-3" alt="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png"></img>
            <p> {result.mission}</p>
            <p href={result.website}>Link to Department Website</p>
            </div>
        );
    }
}
function DeptBudget() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [agencies, setAgencies] = useState([]);

    useEffect(() => {
        fetch("https://api.usaspending.gov/api/v2/agency/"+ AgencyCode + "/budget_function/");
            then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setDivisionName(results.name);
                    setDivisionAmt(results.gross_outlay_amount);
                    setDivisionCategory(results.name.children.name);
                    setCatergoryAmt(results.name.children.name.gross_outlay_amount);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div> Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else{
        return(
            <div>
            <h5 class="modal-title" id="exampleModalLabel">{results.name}</h5>
            <h4> {results.gross_outlay_amount}</h4>
            <div class="modal-body">{results.name.children.name}<br></br>{results.name.children.name.gross_outlay_amount}</div>
            </div>
        );
    }
}


function DeptList(){
    return(
        <div class="list-group">
  <a class="list-group-item list-group-item-action active">
     <div class="d-flex w-100 justify-content-between">
       <h3>Department Name</h3>
       <h4>abbreviation populated from API call</h4>
        <img src="..." class="mr-3" alt="..."></img>
     </div>
     <p class="mb-1">Short description /mission populated from API call</p>
     <p>Budget Amount</p>
     <p href="">link to website of dept</p>
     {/* <!-- Button trigger modal --> */}
 <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
   Agency Specific Budget
 </button>

 {/* <!-- Modal --> */}
 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">insert "agency" and budget breakdown</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         this body will be populated with a budget breakdown of each agency by it's components
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>
  </a>
 </div>
    )
}
export default DeptList;
export default DeptInfo;
export default DeptBudget;
{/* 
//         name:"",
//         abbreviation:"",
//         icon:"",
//         mission:"",
//         website:"",
//         agencies: [], isLoaded: false,
//         agencyresults: [], isLoaded: false
//     }

    // getAgency= (AgencyCode) => { */}
    {/* //     AgencyCode.preventDefault();
    //     const agency = AgencyCode.target.elements.id.value;
    //     if (agencyId) { */}
    {/* //         axios.get(`` + agencyId + `/`)
    //         .then((res) => {
    //             console.log(res); */}
    {/* //             const agencyList = res.data.map((agency) => {
    //                 console.log(name) */}
    {/* //                 console.log(abbreviation)
    //                 console.log(icon)
    //                 console.log(mission)
    //                 console.log(website)
    //                 return <h3> {data.name}</h3>
    //                 return <h4> {data.abbreviation}</h4>
    //                 return <img src="+" {data.icon} "+" class="mr-3" alt="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png"></img>
    //                 return <p> {data.mission}</p>
    //                 return <p href="+" {data.website} "+">Department Website</p>
    //             })
    //             this.setState({ agencies: agencyList, isLoaded: true });

    //             const name = res.data.name;
    //             const abbreviation = res.data.abbreviation;
    //             const icon = res.data.icon;
    //             const mission = res.data.mission;
    //             const website = res.data.website;
    //             this.setState({ name });
    //             this.setState({ abbreviation });
    //             this.setState({ icon });
    //             this.setState({ mission });
    //             this.setState({ website });
    //         })
    //     }
    //     else return console.error();
    // }  */}
