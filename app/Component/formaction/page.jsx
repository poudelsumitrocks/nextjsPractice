

        "use server"
        import fs from 'fs/promises';
      
      
        export async function handleSubmit(e){
        
        console.log(e.get("name"),e.get("add") );
        let a=await fs.writeFile("contact.txt",`Name: ${e.get("name")}\nAddress: ${e.get("add")}\n\n`,{flag:'a+'});
        console.log(a);
        }

