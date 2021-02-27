export interface ChatData{
    created_at: Date,
    date? : Date,
    msg: string,
    title : string, 
    user_type: 'U' | 'C' | 'H1' | 'H2' | 'H3'
}