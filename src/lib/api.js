import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const addQuote = async (quoteData) => {
  const response = await supabase
    .from("quotes")
    .insert({ author: quoteData.author, text: quoteData.text });

  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "could not create quote.");
  }
  return null;
};

export async function getAllQuotes() {
  const response = await fetch(supabase.from("quotes").select("*"));
  const { data } = await supabase.from("quotes").select("*");
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(
    supabase.from("quotes").select().eq("id", quoteId)
  );
  const { data } = await supabase
    .from("quotes")
    .select("id, author, text")
    .eq("id", quoteId)
    .single();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export async function addComment(requestData) {
  // first get comments loaded to an array, push our new comment in addition and then update and push

  const response = await supabase
    .from("quotes")
    // maybe just load the text from the comment
    .update({ comments: requestData.commentData })
    .eq("id", requestData.quoteId)
    .single();

  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "could not add comment.");
  }

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(
    supabase.from("quotes").select("comments").eq("id", quoteId).single()
  );

  const { data } = await supabase
    .from("quotes")
    .select("comments")
    .eq("id", quoteId)
    .single();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  console.log(data);
  console.log(data.data);
  console.log(data.comments);

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }
  console.log(transformedComments);
  return transformedComments;
}
