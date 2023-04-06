import axios from "axios";

function fetchRequest(url){
    var data = null;
    axios.get(url).then((response) => {
      data = response.data.data;
    });

    return data;
}

export default fetchRequest;