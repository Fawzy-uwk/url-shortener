import styled from "styled-components";
import Button from "../UI/Button";
import shorten from "../Assets/bg-shorten-desktop.svg";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url("../Assets/bg-shorten-desktop.svg");
  background-position: center;
  background-color: hsl(257, 27%, 26%);
  position: relative;
  padding: 25px;
  border-radius: 8px;
  margin-top: -50px;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;
const Img = styled.img`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-top: -50px;
  width: 100%;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    margin-top: -50px;
  }
`;
const LI = styled.li`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
  @media only screen and (max-width: 768px) {
    margin-top: 5px;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;
function Shortner() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [error, setError] = useState(null);

  const handleShortenUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "ac419db45fad46aea82482397e8e2f4d", // Replace with your Rebrandly API key
        },
        body: JSON.stringify({ destination: originalUrl }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }
  
      const data = await response.json();
      const newShortenedUrl = data.shortUrl;
  
      const newLinkObject = {
        id: uuidv4(),
        original: originalUrl,
        shortened: newShortenedUrl,
      };
  
      if (!shortenedLinks.some((link) => link.shortened === newShortenedUrl)) {
        setShortenedLinks([...shortenedLinks, newLinkObject]);
        setOriginalUrl("");
      } else {
        setError("This shortened link already exists in the list.");
      }
    } catch (error) {
      setError("Unknown Error Happened 😢");
      console.error(error);
    }
  };
  

  const getStoredShortenedLinks = () => {
    const storedShortenedLinks = sessionStorage.getItem("shortenedLinks");
    return storedShortenedLinks ? JSON.parse(storedShortenedLinks) : [];
  };

  const setStoredShortenedLinks = (links) => {
    sessionStorage.setItem("shortenedLinks", JSON.stringify(links));
  };

  useEffect(() => {
    const storedLinks = getStoredShortenedLinks();
    if (storedLinks.length > 0) {
      setShortenedLinks(storedLinks);
    }
  }, []);

  useEffect(() => {
    setStoredShortenedLinks(shortenedLinks);
  }, [shortenedLinks]);

  const [copied, setCopied] = useState(null);

  const handleCopyToClipboard = (id) => {
    const linkToCopy = shortenedLinks.find((link) => link.id === id);
    if (linkToCopy) {
      navigator.clipboard
        .writeText(linkToCopy.shortened)
        .then(() => {
          setCopied(linkToCopy.id);
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
        });
    } else {
      console.error("Link with the specified ID not found");
    }
  };

  return (
    <>
      <Container className="w-[100%]">
        <Img src={shorten} alt="shorten" />
        <form
          onSubmit={handleShortenUrl}
          className="flex items-center z-10 gap-4 flex-col sm:flex-row w-full"
        >
          <input
            type="url"
            placeholder="Shorten a link here"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className={
              !error
                ? "p-3 sm:w-[full] w-full rounded-md focus:outline-none border-none"
                : "p-3 sm:w-[full] w-full rounded-md focus:outline-red-600 border-red-600"
            }
          />
          <Button className="rounded-md w-full sm:w-44">Shorten It!</Button>
        </form>
        {error && (
          <p className="text-red-500 mt-2 text-start z-10 text-base w-full font-medium">
            {error}
          </p>
        )}
      </Container>

      {shortenedLinks && (
        <UL>
          {shortenedLinks.map((link) => (
            <LI key={link.id}>
              <a
                className="decoration-transparent text-xs sm:text-base w-full font-medium"
                href={link.original}
              >
                {link.original}
              </a>
              <div className="flex sm:items-center w-full sm:w-auto flex-col sm:flex-row gap-4">
                <a
                  className="decoration-transparent text-base text-cyan-400 font-medium"
                  href={link.shortened}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.shortened}
                </a>
                <Button
                  className="rounded-md w-full sm:w-[8rem]"
                  style={
                    copied === link.id
                      ? { backgroundColor: "hsl(257, 27%, 26%)" }
                      : {}
                  }
                  onClick={() => handleCopyToClipboard(link.id)}
                >
                  {copied === link.id ? "Copied!" : "Copy Link!"}
                </Button>
              </div>
            </LI>
          ))}
        </UL>
      )}
    </>
  );
}

export default Shortner;
