import PageHero from '../components/PageHero'
import AccentBar from '../components/AccentBar'
import PhotoSlider from '../components/PhotoSlider'
import { directorPhotos, history } from '../data/about'

export default function About() {
  return (
    <>
      <PageHero title="Head Researcher's Welcome" variant="slate" />

      <section className="greeting">
        <PhotoSlider className="greeting-photo" photos={directorPhotos} />
        <div className="greeting-text">
          <p className="greeting-role">이사장</p>
          <h2>권대용</h2>
          <p>
            안녕하세요~!
            <br />
            미래융합교육 연구소 이사장 권대용 입니다.
          </p>
          <p>
            미래에는 사람들이 무엇을 즐기며 어떤 스타일로 살아갈지 예측하기 힘들지만 사회의 일원으로써 어떤 역량이
            필요할지는 환경에 변화를 보면 자연스럽게 예측할 수 있습니다.
          </p>
          <p>
            앞으로는 모든 분야가 컴퓨팅 환경과 융합하여 현재보다 매우 정교화 되고 지능화 될 것이며 우리가 현재까지
            살아오면서 중요하게 평가 했던 기억, 계산과 같은 인지 능력들이 컴퓨팅 파워에 때문에 지금의 아이들이 살아갈
            환경에서는 그리 중요하지 않게 인식 될 것입니다. 이러한 환경 변화에서 가장 크게 변화를 요구 받는 부분이 교육 분야
            입니다.
          </p>
          <p>
            미래 융합 연구소는 현재의 교육 행정 중심 그리고 결과 평가 기반으로 교육 모델의 한계점을 넘어 지능정보 사회로
            가기 위한 지속 가능한 교육 모델과 시스템 그리고 구체적인 콘텐츠를 연구 개발하고 있으며 이를 보급 확산 하고자
            합니다.
          </p>
          <p>
            산업 시대와 지능정보 시대가 교차하고 있는 지금 미래융합교육 연구소가 연구 개발 하고 있는 실체적인 미래 교육에
            관심을 가져 주셨으면 합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <AccentBar />
          <h2 className="section-title">History</h2>
          <ul className="history">
            {history.map((h) => (
              <li key={`${h.date}-${h.text}`}>
                <span className="history-date">{h.date}</span>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
