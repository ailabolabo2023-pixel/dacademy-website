import React, { useState, useEffect } from 'react';
import './Contact.css';

/**
 * 【管理者・更新担当者様へ】
 * 以下の「PROGRAM_OPTIONS」の中身を書き換えるだけで、
 * お申込みフォームの選択肢（セミナー日程など）を簡単に更新できます。
 * -------------------------------------------------------------
 */
// -------------------------------------------------------------
const SPREADSHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1yIlGAau9e6upqLfsDUj9u3jl76Xsle-Cm_LNoxxAJprzvXHpiWUs_WD3GvkDti-UGyhPexuup5D0/pub?output=csv";

// 【管理者・更新担当者様へ】
// 【管理者・更新担当者様へ】
// 送信先（GAS）のURLを「詳細通知・上書き登録」に完全対応した最新バージョン（AKfycbwBDvwU...）に更新しました。
const GAS_SUBMIT_URL = "https://script.google.com/macros/s/AKfycbwBDvwUum9G8Zg-UvZgg0D6DzCCa2ozvWwD-h3xjzMlZ6uXQxY9IWWwP75hEmyPks4J/exec";

// 万が一ネットが繋がらない時や、スプレッドシートが壊れた時のための「予備」リスト
const DEFAULT_PROGRAMS = [
  "5月2日開催セミナー (5/3 20:00 ZOOM)",
  "実践的育成セミナー",
  "医院訪問研修",
  "ZOOM雑談会",
  "無料相談",
  "その他 お問い合わせ"
];
// -------------------------------------------------------------

export default function Contact() {
  useEffect(() => {
    document.title = "お問い合わせ・お申込み | 歯科衛生士セミナーのDacademy";
  }, []);

  const [programOptions, setProgramOptions] = useState(DEFAULT_PROGRAMS);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    email: '',
    tel: '',
    type: 'お申込み',
    program: '',
    count: '1',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // ページを開いた瞬間にスプレッドシートから最新リストを盗んでくる（フェッチ）
  useEffect(() => {
    async function fetchProgramList() {
      // 最初は仮のURLが入っているため、デフォルトリストを表示
      if (!SPREADSHEET_CSV_URL.includes("docs.google.com")) {
        setProgramOptions(DEFAULT_PROGRAMS);
        setFormData(prev => ({ ...prev, program: DEFAULT_PROGRAMS[0] }));
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(SPREADSHEET_CSV_URL);
        if (!response.ok) throw new Error("Network error");
        const text = await response.text();
        
        // CSVを1行ずつ分解してリスト化
        const rows = text.split(/\r?\n/).filter(row => row.trim() !== '');
        
        if (rows.length > 0) {
          setProgramOptions(rows);
          setFormData(prev => ({ ...prev, program: rows[0] }));
        } else {
          setProgramOptions(DEFAULT_PROGRAMS);
          setFormData(prev => ({ ...prev, program: DEFAULT_PROGRAMS[0] }));
        }
      } catch (error) {
        console.error("Failed to fetch program list:", error);
        // エラー時は予備リストを表示してフォームを止めない
        setProgramOptions(DEFAULT_PROGRAMS);
        setFormData(prev => ({ ...prev, program: DEFAULT_PROGRAMS[0] }));
      } finally {
        setIsLoading(false);
      }
    }
    fetchProgramList();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      const response = await fetch(GAS_SUBMIT_URL, {
        method: 'POST',
        mode: 'no-cors', // GASへの送信の定番設定
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // no-cors の場合はレスポンスの中身が見えませんが、
      // 成功したとみなして完了画面へ
      setIsSubmitted(true);
      window.scrollTo(0, 0);

    } catch (error) {
      console.error('Submission error:', error);
      alert('送信中にエラーが発生しました。時間をおいて再度お試しいただくか、直接メールでお問い合わせください。');
    } finally {
      setIsSending(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-page success-view">
        <div className="container">
          <div className="success-bubble">
            <h2 className="eng-title">THANK YOU!</h2>
            <p className="success-msg">
              お問い合わせ・お申込みを受け付けました！<br/>
              内容を確認し、担当者より折り返しご連絡いたします。
            </p>
            <button className="btn-contact" onClick={() => window.location.href = '/'}>TOPに戻る</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="container section-inner">
        <div className="contact-header">
          <h1 className="eng-title">CONTACT & ENTRY</h1>
          <p className="sub-caption">お問い合わせ・お申込み</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* ご用件の種類 (必須) */}
          <div className="form-group row-flex">
            <label className="form-label">ご用件の種類 <span className="required">必須</span></label>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="type" 
                  value="お申込み" 
                  checked={formData.type === 'お申込み'} 
                  onChange={handleChange} 
                />
                <span>お申込み</span>
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="type" 
                  value="お問い合わせ" 
                  checked={formData.type === 'お問い合わせ'} 
                  onChange={handleChange} 
                />
                <span>お問い合わせ</span>
              </label>
            </div>
          </div>

          {/* 希望プログラム (セレクトボックス) */}
          <div className="form-group">
            <label className="form-label">希望プログラム / 件名</label>
            {isLoading ? (
              <div className="loading-text">最新のプログラムを読み込み中...</div>
            ) : (
              <select 
                name="program" 
                className="form-input select-box" 
                value={formData.program} 
                onChange={handleChange}
              >
                {programOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>{opt}</option>
                ))}
              </select>
            )}
          </div>

          {/* お名前 (必須) */}
          <div className="form-group">
            <label className="form-label">お名前 <span className="required">必須</span></label>
            <input 
              type="text" 
              name="name" 
              className="form-input" 
              placeholder="山田 花子" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* 貴院名 (任意) */}
          <div className="form-group">
            <label className="form-label">貴院名・法人名 <span className="optional">任意</span></label>
            <input 
              type="text" 
              name="clinic" 
              className="form-input" 
              placeholder="〇〇歯科クリニック" 
              value={formData.clinic}
              onChange={handleChange}
            />
          </div>

          {/* メールアドレス (必須) */}
          <div className="form-group">
            <label className="form-label">メールアドレス <span className="required">必須</span></label>
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="example@dacademy.jp" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* お電話番号 (任意) */}
          <div className="form-group">
            <label className="form-label">お電話番号 <span className="optional">任意</span></label>
            <input 
              type="tel" 
              name="tel" 
              className="form-input" 
              placeholder="090-0000-0000" 
              value={formData.tel}
              onChange={handleChange}
            />
          </div>

          {/* 参加人数 (必須) */}
          <div className="form-group">
            <label className="form-label">参加人数 <span className="required">必須</span></label>
            <input 
              type="number" 
              name="count" 
              className="form-input mini-input" 
              min="1" 
              required 
              value={formData.count}
              onChange={handleChange}
            />
            <span className="unit-text">名</span>
          </div>

          {/* メッセージ (任意) */}
          <div className="form-group">
            <label className="form-label">メッセージ / 備考 <span className="optional">任意</span></label>
            <textarea 
              name="message" 
              className="form-input textarea" 
              rows="5" 
              placeholder="ご相談内容や、研修の第一希望日時などをご記入ください。"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-submit">
            <button type="submit" className="send-btn" disabled={isSending}>
              <span className="btn-inner">{isSending ? 'SENDING...' : 'SEND! 送信する'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
