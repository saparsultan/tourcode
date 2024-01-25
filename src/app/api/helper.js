export async function getTourCodes() {
  const res = await fetch(
    "https://www.fondkamkor.kz/Voucher/partner/dictionaries/get/agents_registry?is_ajax=1&enabled=1&status=1&sortby=rowid",
    {
      method: "GET",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
    },
  );
  return await res.json();
}
