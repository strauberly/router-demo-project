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
  console.log(transformedQuotes);
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
  // call comments and preserve into a new const and then push const in to comments []

  // const newComment = { comment: requestData.text, id: requestData.commentId };
  // const comments = [];
  // comments.push(newComment);

  const response = await supabase.from("quoteComments").insert({
    text: requestData.commentData.text,
    quoteId: requestData.quoteId,
  });

  // const response = await supabase
  //   .from("quotes")
  //   .update({ comments: comments })
  //   .eq("id", requestData.quoteId)
  //   .single();

  console.log(response);
  if (!response.status === 201) {
    throw new Error(response.message || "could not add comment.");
  }

  return { commentId: response.name };
}

export async function getAllComments(quoteId) {
  console.log(quoteId);

  const response = await fetch(
    supabase.from("quoteComments").select("id, text").eq("quoteId", quoteId)
  );

  const { data } = await supabase
    .from("quoteComments")
    .select("id, text")
    .eq("quoteId", quoteId);
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  console.log(data);

  const transformedComments = [];
  // sort this
  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    console.log(commentObj);

    transformedComments.push(commentObj);
  }
  console.log(transformedComments);
  return transformedComments;
}
