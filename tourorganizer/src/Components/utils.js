export const analyze = (text) =>{

    if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
    {
        return 'Hii, How can I help you?';
    }
    else if(text.includes("Thank you"))
    {
        return "Thank you connect with us for more information";
    }
    return "I can't get it"
}