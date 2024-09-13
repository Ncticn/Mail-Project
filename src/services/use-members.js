export async function getMembers() {
    try {
        const response = await fetch("/data/mailing-list-member.json");
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(`Fetch Error : ${error}`)
    }
}