import { useState, useMemo } from "react";
import { Heart, ThumbsDown, Reply, Pin, EyeOff, Eye, Sparkles, Send, Smile } from "lucide-react";

interface CommentReaction {
  emoji: string;
  count: number;
  reacted?: boolean;
}

interface Comment {
  id: string;
  author: string;
  avatarColor: string;
  badge?: "top-fan" | null;
  timeAgo: string;
  text: string;
  spoiler?: boolean;
  pinned?: boolean;
  likes: number;
  dislikes: number;
  liked?: boolean;
  disliked?: boolean;
  reactions: CommentReaction[];
  replies: Comment[];
}

const EMOJIS = ["🔥", "😂", "😮", "❤️", "🤯", "👏"];

const seedComments = (itemId: string): Comment[] => [
  {
    id: `${itemId}-c1`,
    author: "Nova",
    avatarColor: "from-fuchsia-400 to-cyan-300",
    badge: "top-fan",
    timeAgo: "2h",
    text: "The pacing in the third act is unreal. Best thing I've watched this month.",
    pinned: true,
    likes: 142,
    dislikes: 3,
    reactions: [
      { emoji: "🔥", count: 38 },
      { emoji: "❤️", count: 21 },
    ],
    replies: [
      {
        id: `${itemId}-c1-r1`,
        author: "Kairo",
        avatarColor: "from-indigo-400 to-violet-400",
        timeAgo: "1h",
        text: "Agreed. Soundtrack carried me into orbit.",
        likes: 22,
        dislikes: 0,
        reactions: [{ emoji: "🎧", count: 4 }],
        replies: [],
      },
    ],
  },
  {
    id: `${itemId}-c2`,
    author: "Rin",
    avatarColor: "from-cyan-300 to-emerald-300",
    timeAgo: "5h",
    text: "Okay but did anyone else catch the cameo in the diner scene? I had to rewind twice.",
    spoiler: true,
    likes: 89,
    dislikes: 4,
    reactions: [{ emoji: "😮", count: 11 }],
    replies: [],
  },
  {
    id: `${itemId}-c3`,
    author: "Vega",
    avatarColor: "from-rose-400 to-orange-300",
    timeAgo: "8h",
    text: "Visuals were 10/10, story 7/10. Still worth every minute.",
    likes: 54,
    dislikes: 12,
    reactions: [],
    replies: [],
  },
];

interface CommentSectionProps {
  itemId: string;
  itemTitle: string;
}

export default function CommentSection({ itemId, itemTitle }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(() => seedComments(itemId));
  const [draft, setDraft] = useState("");
  const [draftSpoiler, setDraftSpoiler] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyDraft, setReplyDraft] = useState("");

  const sorted = useMemo(
    () => [...comments].sort((a, b) => Number(!!b.pinned) - Number(!!a.pinned)),
    [comments]
  );

  const updateTree = (
    list: Comment[],
    id: string,
    fn: (c: Comment) => Comment
  ): Comment[] =>
    list.map((c) =>
      c.id === id ? fn(c) : { ...c, replies: updateTree(c.replies, id, fn) }
    );

  const toggleLike = (id: string) =>
    setComments((cs) =>
      updateTree(cs, id, (c) => ({
        ...c,
        liked: !c.liked,
        likes: c.likes + (c.liked ? -1 : 1),
        disliked: false,
        dislikes: c.disliked ? c.dislikes - 1 : c.dislikes,
      }))
    );

  const toggleDislike = (id: string) =>
    setComments((cs) =>
      updateTree(cs, id, (c) => ({
        ...c,
        disliked: !c.disliked,
        dislikes: c.dislikes + (c.disliked ? -1 : 1),
        liked: false,
        likes: c.liked ? c.likes - 1 : c.likes,
      }))
    );

  const reactWith = (id: string, emoji: string) =>
    setComments((cs) =>
      updateTree(cs, id, (c) => {
        const existing = c.reactions.find((r) => r.emoji === emoji);
        if (existing) {
          return {
            ...c,
            reactions: c.reactions.map((r) =>
              r.emoji === emoji
                ? { ...r, count: r.count + (r.reacted ? -1 : 1), reacted: !r.reacted }
                : r
            ),
          };
        }
        return { ...c, reactions: [...c.reactions, { emoji, count: 1, reacted: true }] };
      })
    );

  const submit = () => {
    const text = draft.trim();
    if (!text) return;
    const newComment: Comment = {
      id: `${itemId}-${Date.now()}`,
      author: "You",
      avatarColor: "from-cyan-300 via-indigo-400 to-violet-400",
      timeAgo: "now",
      text,
      likes: 0,
      dislikes: 0,
      spoiler: draftSpoiler,
      reactions: [],
      replies: [],
    };
    setComments((cs) => [...cs, newComment]);
    setDraft("");
    setDraftSpoiler(false);
  };

  const submitReply = (parentId: string) => {
    const text = replyDraft.trim();
    if (!text) return;
    const reply: Comment = {
      id: `${parentId}-r-${Date.now()}`,
      author: "You",
      avatarColor: "from-cyan-300 via-indigo-400 to-violet-400",
      timeAgo: "now",
      text,
      likes: 0,
      dislikes: 0,
      reactions: [],
      replies: [],
    };
    setComments((cs) =>
      updateTree(cs, parentId, (c) => ({ ...c, replies: [...c.replies, reply] }))
    );
    setReplyDraft("");
    setReplyTo(null);
  };

  const renderComment = (c: Comment, depth = 0) => (
    <div
      key={c.id}
      className={`relative ${depth > 0 ? "ml-6 sm:ml-10 mt-3 pl-4 border-l border-white/8" : "mt-4"}`}
    >
      <div className="vapor-glass rounded-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className={`shrink-0 w-9 h-9 rounded-full bg-gradient-to-br ${c.avatarColor} flex items-center justify-center font-display font-bold text-background text-sm`}>
            {c.author[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center flex-wrap gap-2">
              <span className="font-display text-sm font-semibold text-foreground">{c.author}</span>
              {c.badge === "top-fan" && (
                <span className="inline-flex items-center gap-1 vapor-gradient-bg text-background text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded">
                  <Sparkles className="w-2.5 h-2.5" /> Top Fan
                </span>
              )}
              {c.pinned && (
                <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-primary/90">
                  <Pin className="w-2.5 h-2.5" /> Pinned
                </span>
              )}
              <span className="text-[11px] text-foreground/40">· {c.timeAgo}</span>
            </div>

            <div className="mt-2">
              {c.spoiler && !revealed[c.id] ? (
                <button
                  onClick={() => setRevealed((r) => ({ ...r, [c.id]: true }))}
                  className="w-full text-left text-xs sm:text-sm text-foreground/55 italic vapor-glass-strong rounded-xl px-3 py-2.5 inline-flex items-center gap-2 hover:text-foreground transition"
                >
                  <EyeOff className="w-3.5 h-3.5" />
                  Spoiler hidden — tap to reveal
                </button>
              ) : (
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {c.spoiler && (
                    <button
                      onClick={() => setRevealed((r) => ({ ...r, [c.id]: false }))}
                      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary mr-2 align-middle"
                    >
                      <Eye className="w-3 h-3" /> Spoiler
                    </button>
                  )}
                  {c.text}
                </p>
              )}
            </div>

            {/* Reactions */}
            {c.reactions.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.reactions.map((r) => (
                  <button
                    key={r.emoji}
                    onClick={() => reactWith(c.id, r.emoji)}
                    className={`px-2 py-0.5 rounded-full text-xs border transition ${
                      r.reacted
                        ? "border-primary/50 bg-primary/15 text-foreground"
                        : "border-white/8 bg-white/[0.04] text-foreground/70 hover:bg-white/[0.08]"
                    }`}
                  >
                    <span className="mr-1">{r.emoji}</span>
                    <span className="font-semibold">{r.count}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="mt-3 flex items-center flex-wrap gap-1 text-xs">
              <button
                onClick={() => toggleLike(c.id)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full transition ${
                  c.liked ? "text-primary bg-primary/15" : "text-foreground/60 hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${c.liked ? "fill-primary" : ""}`} />
                <span className="font-semibold">{c.likes}</span>
              </button>
              <button
                onClick={() => toggleDislike(c.id)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full transition ${
                  c.disliked ? "text-rose-400 bg-rose-400/10" : "text-foreground/60 hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <ThumbsDown className="w-3.5 h-3.5" />
                <span className="font-semibold">{c.dislikes}</span>
              </button>

              {/* Emoji quick-react */}
              <div className="group/emoji relative">
                <button className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-foreground/60 hover:bg-white/5 hover:text-foreground transition">
                  <Smile className="w-3.5 h-3.5" />
                </button>
                <div className="absolute left-0 top-full mt-1 vapor-glass-strong rounded-full px-2 py-1.5 flex gap-1 opacity-0 invisible group-hover/emoji:opacity-100 group-hover/emoji:visible transition z-20">
                  {EMOJIS.map((e) => (
                    <button
                      key={e}
                      onClick={() => reactWith(c.id, e)}
                      className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center text-base"
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              {depth < 2 && (
                <button
                  onClick={() => { setReplyTo(replyTo === c.id ? null : c.id); setReplyDraft(""); }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-foreground/60 hover:bg-white/5 hover:text-foreground transition"
                >
                  <Reply className="w-3.5 h-3.5" />
                  Reply
                </button>
              )}
            </div>

            {/* Reply composer */}
            {replyTo === c.id && (
              <div className="mt-3 vapor-glass-strong rounded-xl p-2 flex items-center gap-2 animate-fade-in">
                <input
                  autoFocus
                  value={replyDraft}
                  onChange={(e) => setReplyDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submitReply(c.id)}
                  placeholder={`Reply to ${c.author}…`}
                  className="flex-1 bg-transparent outline-none text-sm px-2 py-1.5 placeholder:text-foreground/40"
                />
                <button
                  onClick={() => submitReply(c.id)}
                  className="vapor-gradient-bg text-background rounded-lg w-8 h-8 flex items-center justify-center disabled:opacity-40"
                  disabled={!replyDraft.trim()}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {c.replies.map((r) => renderComment(r, depth + 1))}
    </div>
  );

  return (
    <section className="mt-12 sm:mt-16 pb-16">
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-foreground/40">
            Discussion
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight vapor-gradient-text">
            Talk about {itemTitle}
          </h2>
        </div>
        <span className="text-xs text-foreground/45">{comments.length} comments</span>
      </div>

      {/* Composer */}
      <div className="vapor-glass-strong rounded-2xl p-3 sm:p-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-300 via-indigo-400 to-violet-400 flex items-center justify-center font-display font-bold text-background">
            Y
          </div>
          <div className="flex-1">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Share your take… be kind."
              rows={2}
              className="w-full bg-transparent outline-none resize-none text-sm placeholder:text-foreground/40 leading-relaxed"
            />
            <div className="flex items-center justify-between flex-wrap gap-2 mt-2">
              <label className="inline-flex items-center gap-2 text-xs text-foreground/60 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={draftSpoiler}
                  onChange={(e) => setDraftSpoiler(e.target.checked)}
                  className="accent-primary"
                />
                <span className="inline-flex items-center gap-1.5">
                  <EyeOff className="w-3.5 h-3.5" /> Mark as spoiler
                </span>
              </label>
              <button
                onClick={submit}
                disabled={!draft.trim()}
                className="inline-flex items-center gap-2 vapor-gradient-bg text-background font-semibold text-sm px-4 py-2 rounded-full disabled:opacity-40 hover:scale-[1.02] active:scale-[0.98] transition"
              >
                <Send className="w-3.5 h-3.5" />
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="mt-4">
        {sorted.map((c) => renderComment(c))}
      </div>
    </section>
  );
}