export async function getMailLists() {
  try {
    const response = await fetch("/data/mailing-lists.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Merhabalar Sn.${error.message || error}`);
  }
}
