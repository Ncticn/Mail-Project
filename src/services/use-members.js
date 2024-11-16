import { ref } from "vue";

// export async function getMailMembers() {
//     try {
//         const response = await fetch("/data/mailing-list-member.json");
//         const data = await response.json();
//         return data;
//     } catch(error) {
//         console.log(`Fetch Error : ${error}`)
//     }
// }

export function useMembers() {
    const members = ref([]);
    const error = ref(null);

    const loadMembers = async () => {
        try{
            const response = await fetch('/data/mailing-list-member.json');
            if(!response.ok){
                throw new Error ('Veri alınırken bir şeyler ters gitti.');
            }
            const data = await response.json();
            members.value = data;
        } catch(err) {
            error.value = err.message;
        }
    };
    return {members, error, loadMembers };
}