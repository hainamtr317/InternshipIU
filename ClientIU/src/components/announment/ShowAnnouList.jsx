import { MenuItem } from "@mui/material";

function ShowAnnounceList() {
    return (  <>
        {Array.from(Array(17)).map((_, index) => (
          <MenuItem>
          This is an announcement {index+1}
          </MenuItem>
        ))}
   
    
    </>);
}

export default ShowAnnounceList;