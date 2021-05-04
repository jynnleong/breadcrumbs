const root = require('./test');

let dirObjectArray = [];
let parents = null;

const iterateStructure = (data) => {
    for(var key in data)
    {
        if(key != "children" && key != "type" && parents == null)
        {
            // TODO: Set edge case for leaf node
            if(data[key].type == "file")
            {
                let rootObject = {
                    name: key,
                    children: [],
                    type: data[key].type,
                };
                dirObjectArray.push(rootObject);
            }
            else
            {
                let rootObject = {
                    name: key,
                    children: [],
                    type: data[key].type,
                };
                parents = key;
                dirObjectArray.push(rootObject);
            }
        }
        
        if(key == "children")
        {
            if(parents != null)
            {
                for(var dirParent in dirObjectArray)
                {
                    if(dirObjectArray[dirParent].name == parents)
                    {
                        let childData = [];
                        childData.push(data[key]);
                        dirObjectArray[dirParent].children = childData;
                    }
                }
                parents = null;
            }
        }

        if(typeof(data[key]) == 'object')
        {
            iterateStructure(data[key]);
        }

    }
}


iterateStructure(root);
for(var index in dirObjectArray)
{
    let currentDir = dirObjectArray[index];
    let childDir = [];


    for(var child in currentDir.children[0])
    {
        // if(child == "type" || child == "children")
        // {
        //     break;
        // }
        
        childDir.push(child);
    }
    
    currentDir.children = childDir;
}


module.exports = dirObjectArray;