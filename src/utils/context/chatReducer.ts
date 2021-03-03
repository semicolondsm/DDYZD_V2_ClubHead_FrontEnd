export default function (state: any, action: any) {
  switch (action.type) {
    case "get":
      return { ...state };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}
