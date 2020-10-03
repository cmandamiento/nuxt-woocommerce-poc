export default function({ $axios }, inject) {
  const api = $axios.create({
    auth: {}
  });

  inject("api", api);
}
