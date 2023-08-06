import { HeaderSectionEnum } from "../../components/Header/HeaderSectionEnum";

interface IHandler<TIn, TOut> {
  setNextHandler(handler: IHandler<TIn, TOut>): IHandler<TIn, TOut>;
  handleRequest(request: TIn): TOut;
}

type HomeIntersectionSectionProps = {
  about: IntersectionObserverEntry;
  skills: IntersectionObserverEntry;
  experiences: IntersectionObserverEntry;
};

type HandlerResponse = HeaderSectionEnum | null;
type IntersectionHandler = IHandler<
  HomeIntersectionSectionProps,
  HandlerResponse
>;

export class HomeIntersectionHandler
  implements IHandler<HomeIntersectionSectionProps, HandlerResponse>
{
  setNextHandler(handler: IntersectionHandler): IntersectionHandler {
    return handler;
  }
  handleRequest(request: HomeIntersectionSectionProps): HandlerResponse {
    const aboutHandler: IntersectionHandler = new IsIntersectingHomeHandler();
    const skillsHandler: IntersectionHandler =
      new IsIntersectingSkillsHandler();
    const experienceHandler: IntersectionHandler =
      new IsIntersectingExperienceHandler();
    aboutHandler
      .setNextHandler(skillsHandler)
      .setNextHandler(experienceHandler);
    return aboutHandler.handleRequest(request);
  }
}

class IsIntersectingHomeHandler
  implements IHandler<HomeIntersectionSectionProps, HandlerResponse>
{
  private nextHandler: IHandler<
    HomeIntersectionSectionProps,
    HandlerResponse
  > | null = null;

  setNextHandler(
    handler: IHandler<HomeIntersectionSectionProps, HandlerResponse>
  ): IHandler<HomeIntersectionSectionProps, HandlerResponse> {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(request: HomeIntersectionSectionProps): HandlerResponse {
    if (
      request.about?.intersectionRatio > 0.4 &&
      request.about?.intersectionRatio <= 0.75
    )
      return HeaderSectionEnum.ABOUT;
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(request);
    }
    return null;
  }
}

class IsIntersectingSkillsHandler
  implements IHandler<HomeIntersectionSectionProps, HandlerResponse>
{
  private nextHandler: IHandler<
    HomeIntersectionSectionProps,
    HandlerResponse
  > | null = null;

  setNextHandler(handler: IntersectionHandler): IntersectionHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(request: HomeIntersectionSectionProps): HandlerResponse {
    if (
      request.skills?.intersectionRatio > 0.6 &&
      request.experiences?.intersectionRatio < 0.8 &&
      request.about?.intersectionRatio < 0.5
    )
      return HeaderSectionEnum.SKILLS;
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(request);
    }
    return null;
  }
}

class IsIntersectingExperienceHandler
  implements IHandler<HomeIntersectionSectionProps, HandlerResponse>
{
  private nextHandler: IHandler<
    HomeIntersectionSectionProps,
    HandlerResponse
  > | null = null;

  setNextHandler(handler: IntersectionHandler): IntersectionHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(request: HomeIntersectionSectionProps): HandlerResponse {
    if (request.experiences?.intersectionRatio > 0.5)
      return HeaderSectionEnum.EXPERIENCES;
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(request);
    }
    return null;
  }
}
